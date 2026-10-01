import fs from 'fs/promises';
import path from 'path';
import { translate } from 'bing-translate-api';
import pLimit from 'p-limit';

const fileLimit = pLimit(10); // 10 files concurrently

async function translateText(text) {
    if (!text || text.trim().length === 0) return text;
    try {
        const paragraphs = text.split('\n');
        let currentChunk = '';
        const chunks = [];
        for (const p of paragraphs) {
            if (currentChunk.length + p.length > 2500) {
                chunks.push(currentChunk);
                currentChunk = p + '\n';
            } else {
                currentChunk += p + '\n';
            }
        }
        if (currentChunk) chunks.push(currentChunk);

        // Translate chunks concurrently
        const translatePromises = chunks.map(async chunk => {
            if (!chunk.trim()) return '\n';
            try {
                const res = await translate(chunk, null, 'vi');
                return res.translation + '\n';
            } catch(e) {
                console.error("Chunk err:", e.message);
                return chunk + '\n';
            }
        });
        
        const translatedChunks = await Promise.all(translatePromises);
        return translatedChunks.join('').trim();
    } catch (e) {
        console.error('Translation error:', e.message);
        return text;
    }
}

async function processFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        if (content.toLowerCase().includes('người ') || content.toLowerCase().includes('của ')) {
            return; // skip
        }

        console.log(`Translating: ${filePath}`);
        const translatedContent = await translateText(content);
        
        if (translatedContent && translatedContent !== content) {
            await fs.writeFile(filePath, translatedContent, 'utf-8');
            console.log(`✅ Success: ${filePath}`);
        }
    } catch (e) {
        console.error(`Failed: ${filePath}`, e.message);
    }
}

async function walkDir(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        if (filePath.includes('.git') || filePath.includes('node_modules')) continue;
        
        const stat = await fs.stat(filePath);
        if (stat && stat.isDirectory()) {
            const res = await walkDir(filePath);
            results = results.concat(res);
        } else if (file.endsWith('.md') || file.endsWith('.html')) {
            results.push(filePath);
        }
    }
    return results;
}

async function renameFiles(files) {
    for (const file of files) {
        const basename = path.basename(file);
        const dirname = path.dirname(file);
        
        if (/[\u4e00-\u9fff]/.test(basename)) {
            try {
                const nameWithoutExt = path.parse(basename).name;
                const ext = path.parse(basename).ext;
                const res = await translate(nameWithoutExt, null, 'vi');
                let newName = res.translation.replace(/[<>:"/\\|?*]/g, '');
                const newPath = path.join(dirname, newName + ext);
                await fs.rename(file, newPath);
                console.log(`Renamed: ${basename} -> ${newName}${ext}`);
            } catch(e) {
                // ignore
            }
        }
    }
}

async function main() {
    console.log("Starting FAST Bing translation...");
    const files = await walkDir('.');
    
    // Process 10 files concurrently
    const tasks = files.map(file => fileLimit(() => processFile(file)));
    await Promise.all(tasks);
    
    console.log('Renaming files...');
    const updatedFiles = await walkDir('.');
    await renameFiles(updatedFiles);
    
    console.log('All done!');
}

main();
