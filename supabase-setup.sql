-- ==========================================
-- SUPABASE DATABASE SETUP SCRIPT
-- Project: Digital Graduation Album
-- ==========================================

-- 1. XÓA CÁC BẢNG CŨ (NẾU CÓ) ĐỂ LÀM SẠCH
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS gallery_images CASCADE;
DROP TABLE IF EXISTS letters CASCADE;
DROP TABLE IF EXISTS nicknames CASCADE;
DROP TABLE IF EXISTS persons CASCADE;

-- 2. TẠO BẢNG PERSONS (Thông tin thành viên)
CREATE TABLE persons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  short_name TEXT UNIQUE NOT NULL,
  full_name TEXT,
  faculty TEXT,
  course TEXT,
  avatar_url TEXT,
  graduation_photo_url TEXT,
  graduation_date TEXT,
  graduation_caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TẠO BẢNG NICKNAMES (Biệt danh / Hall of Fame)
CREATE TABLE nicknames (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  receiver_id UUID REFERENCES persons(id) ON DELETE CASCADE,
  giver_name TEXT NOT NULL,
  nickname TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. TẠO BẢNG LETTERS (Thư gửi nhóm)
CREATE TABLE letters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name TEXT NOT NULL UNIQUE, -- Mỗi người chỉ viết 1 thư
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. TẠO BẢNG GALLERY_IMAGES (Ảnh kỷ niệm)
CREATE TABLE gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  uploader_name TEXT NOT NULL,
  aspect_ratio TEXT DEFAULT 'aspect-square',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. TẠO BẢNG COMMENTS (Bình luận trên ảnh)
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_id UUID REFERENCES gallery_images(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. THIẾT LẬP ROW LEVEL SECURITY (RLS)
-- Vì hệ thống không yêu cầu đăng nhập, ta sẽ mở quyền Đọc/Ghi (Public Access) cho tất cả các bảng.
ALTER TABLE persons ENABLE ROW LEVEL SECURITY;
ALTER TABLE nicknames ENABLE ROW LEVEL SECURITY;
ALTER TABLE letters ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Access" ON persons FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access" ON nicknames FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access" ON letters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access" ON gallery_images FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access" ON comments FOR ALL USING (true) WITH CHECK (true);

-- 8. THÊM DỮ LIỆU BAN ĐẦU CHO 5 THÀNH VIÊN
INSERT INTO persons (short_name) VALUES 
  ('Khánh'), 
  ('Nguyên'), 
  ('Châu'), 
  ('Linh'), 
  ('Ngân');

-- 9. TẠO STORAGE BUCKET ĐỂ LƯU ẢNH
-- Lưu ý: Nếu lệnh này lỗi do thiếu quyền, bạn có thể tự tạo Bucket tên "memories" trực tiếp trên giao diện Supabase.
INSERT INTO storage.buckets (id, name, public) VALUES ('memories', 'memories', true)
ON CONFLICT (id) DO NOTHING;

-- Mở quyền Public cho Storage bucket 'memories'
CREATE POLICY "Public Access" ON storage.objects FOR ALL USING (bucket_id = 'memories') WITH CHECK (bucket_id = 'memories');
