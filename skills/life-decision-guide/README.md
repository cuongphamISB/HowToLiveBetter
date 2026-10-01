# Skill life-decision-guide

Để AI trả lời câu hỏi cụ thể dựa trên **Hướng dẫn sống hiệu quả**. Trợ lý tra nội dung trước, cân nhắc chi phí/lợi ích, ghi rõ chương và mục; thiếu thì nói rõ, không tự bịa số.

Quy tắc chung ở [SKILL.md](SKILL.md).

## Claude Code

Mở trong repo này là dùng được qua `.claude/skills/life-decision-guide/`. Muốn cài cá nhân:

```bash
mkdir -p ~/.claude/skills/life-decision-guide
curl -fsSL -o ~/.claude/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/cuongphamISB/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Hỏi “Có nên bảo lãnh cho bạn không?” hoặc nói rõ dùng life-decision-guide.

## Codex

Trong repo, AGENTS.md đã chỉ tới skill. Cài dùng ở thư mục khác:

```bash
mkdir -p ~/.agents/skills/life-decision-guide
curl -fsSL -o ~/.agents/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/cuongphamISB/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Gọi `$life-decision-guide` hoặc hỏi trực tiếp. Phiên bản mới dùng `$`, không dùng `/life-decision-guide`; khởi động lại nếu chưa nhận skill. Cơ chế prompt cũ tại `~/.codex/prompts/` đã được thay bằng skill; tham khảo [openai/codex#10848](https://github.com/openai/codex/issues/10848).

## Nội dung và cập nhật

Có repo cục bộ thì đọc book/. Nếu không có:

```bash
git clone --depth 1 https://github.com/cuongphamISB/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Không có mạng thì nói không lấy được. Danh sách chương đọc từ README; thuật toán đọc COST_W và e.ratio trong index.html. Không lưu số liệu hoặc danh sách sao chép riêng trong skill.
