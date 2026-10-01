# Kỹ năng quyết định cuộc sống (life-decision-guide)

Để trợ lý AI trả lời các câu hỏi cụ thể theo "Hướng dẫn cuộc sống có chi phí-hiệu quả cao": nên làm hay không, có đáng hay không, chọn như thế nào, khi gặp sự cố cần làm gì trước, nhận được khoản tiền nào, làm vậy có vi phạm pháp luật hay không.

Nhiệm vụ của nó chỉ có một: **trước tiên tra các mục liên quan từ nội dung chính, sau đó theo cách tính toán của sách sắp xếp trả lời**, mỗi mục ghi rõ xuất xứ ở chương và mục nào. Nếu không tìm thấy thì nói không tìm được, không tự ý ghi số liệu theo trí nhớ.

Các quy tắc đều nằm trong [SKILL.md](SKILL.md), hai công cụ dùng chung một file, không duy trì hai bản.

## Cài vào Claude Code

Mở Claude Code trong kho lưu trữ này, không cần cài đặt — `.claude/skills/life-decision-guide/` đã trỏ đến quy tắc này.

Muốn dùng ở bất kỳ thư mục nào, sao chép vào thư mục skill cá nhân:

```bash
mkdir -p ~/.claude/skills/life-decision-guide && curl -fsSL -o ~/.claude/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Sau đó hỏi trực tiếp "Đi làm hằng ngày mất hai giờ có đáng không" hoặc "Bạn tôi nhờ tôi bảo lãnh, có nên ký không" sẽ tự động kích hoạt; cũng có thể nói rõ "dùng life-decision-guide để trả lời".

## Cài vào Codex

Mở Codex trong kho lưu trữ này, không cần cài — `AGENTS.md` ở thư mục gốc đã chỉ ra.

Muốn dùng ở bất kỳ thư mục nào, sao chép vào thư mục skill cá nhân của Codex `~/.agents/skills`:

```bash
mkdir -p ~/.agents/skills/life-decision-guide && curl -fsSL -o ~/.agents/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Sau đó hỏi câu hỏi trực tiếp sẽ tự động kích hoạt như mô tả, cũng có thể nhập `$life-decision-guide` để gọi rõ ràng. Lưu ý là `$` chứ không phải `/`, phiên bản Codex mới nhập `/life-decision-guide` sẽ báo `Unrecognized command`. Nếu không xuất hiện thì khởi động lại Codex một lần.

Codex cũ chưa có skill, chỉ dùng được bằng prompt tùy chỉnh: đặt file vào `~/.codex/prompts/life-decision-guide.md`, sau đó dùng `/life-decision-guide` để gọi. Codex đã thông báo từ bỏ cách này ([openai/codex#10848](https://github.com/openai/codex/issues/10848)), phiên bản mới dùng cách cài skill nêu trên.

## Nội dung chính lấy từ đâu

Nếu máy có kho lưu trữ này thì đọc từ `book/` cục bộ; nếu không có thì lấy trực tuyến:

```bash
git clone --depth 1 https://github.com/eternity4719/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Toàn bộ sách 1.3 MB, clone nông một lần chỉ vài giây. Nếu không lấy được mạng thì nói thật không lấy được, không tự thay nội dung.

## Lưu ý khi thay đổi

Trong SKILL.md không để lại bất kỳ danh sách hay số liệu nào theo nội dung chính: danh sách chương đọc trong README ở bảng "Những câu hỏi cuốn sách muốn trả lời", thuật toán mức chi phí-hiệu quả đọc từ hai dòng `COST_W` và `e.ratio` trong `index.html`. Vì vậy thêm/bớt chương, thay đổi quy tắc cấp độ không cần sửa thư mục này.