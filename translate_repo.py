import os
import time
from deep_translator import GoogleTranslator

translator = GoogleTranslator(source='auto', target='vi')

def translate_batch_with_retry(texts, max_retries=3):
    if not texts:
        return []
    
    for attempt in range(max_retries):
        try:
            # Add delay to avoid rate limiting
            time.sleep(2)
            results = translator.translate_batch(texts)
            return results
        except Exception as e:
            print(f"Batch translation error on attempt {attempt+1}: {e}")
            time.sleep(5 * (attempt + 1))
            
    # If batch fails, try one by one
    results = []
    for text in texts:
        try:
            time.sleep(2)
            results.append(translator.translate(text))
        except:
            results.append(text)
    return results

def translate_text(text):
    if not text.strip():
        return text
    try:
        # Split text into chunks of < 4000 chars to respect limits
        max_chars = 4000
        paragraphs = text.split('\n')
        chunks = []
        current_chunk = ""
        
        for para in paragraphs:
            if len(current_chunk) + len(para) + 1 < max_chars:
                current_chunk += para + "\n"
            else:
                if current_chunk:
                    chunks.append(current_chunk)
                current_chunk = para + "\n"
        
        if current_chunk:
            chunks.append(current_chunk)
            
        translated_chunks = translate_batch_with_retry(chunks)
        return '\n'.join([t if t else "" for t in translated_chunks])
    except Exception as e:
        print(f"Error translating text: {e}")
        return text

def translate_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # skip if looks translated or empty
        if len(content) < 10 or 'người' in content.lower() or 'của' in content.lower():
            print(f"Skipping (might be already translated): {filepath}")
            return
            
        print(f"Translating content of: {filepath}")
        translated_content = translate_text(content)
        
        if translated_content and translated_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(translated_content)
            print(f"Successfully translated {filepath}")
    except Exception as e:
        print(f"Failed to process {filepath}: {e}")

def process_repo(repo_path):
    # Only translate specific extensions
    valid_exts = ('.md', '.html')
    
    for root, dirs, files in os.walk(repo_path, topdown=False):
        if '.git' in root or '.github' in root or 'node_modules' in root:
            continue
            
        for file in files:
            if file.endswith(valid_exts):
                filepath = os.path.join(root, file)
                translate_file(filepath)
                time.sleep(1)

if __name__ == "__main__":
    process_repo('.')
    print("Content translation complete.")
