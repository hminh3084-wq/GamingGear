-- =====================================================================
-- Setup database MySQL cho LuisGaf Store
-- Chạy file này 1 lần để tạo bảng + insert dữ liệu
-- =====================================================================

CREATE DATABASE IF NOT EXISTS ThietBiDienTu CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ThietBiDienTu;

-- ── Bảng DanhMuc ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS DanhMuc (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    tendanhmuc  VARCHAR(100) NOT NULL,
    slug        VARCHAR(50)  NOT NULL UNIQUE
);

-- ── Bảng ThuongHieu ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ThuongHieu (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    tenthuonghieu   VARCHAR(100) NOT NULL UNIQUE
);

-- ── Bảng SanPham ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS SanPham (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    tensp           NVARCHAR(255) NOT NULL,
    danhmuc_id      INT NOT NULL,
    thuonghieu_id   INT,
    giagoc          DECIMAL(18,0),
    giaban          DECIMAL(18,0) NOT NULL,
    soluongtonkho   INT DEFAULT 0,
    hinhanh         VARCHAR(255),
    mota            TEXT,
    noibat          TINYINT(1) DEFAULT 0,
    trangthai       TINYINT(1) DEFAULT 1,
    FOREIGN KEY (danhmuc_id)    REFERENCES DanhMuc(id),
    FOREIGN KEY (thuonghieu_id) REFERENCES ThuongHieu(id)
);

-- ── Bảng DonHang ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS DonHang (
    id                      INT AUTO_INCREMENT PRIMARY KEY,
    madon                   VARCHAR(20)  NOT NULL UNIQUE,
    tennguoinhan            NVARCHAR(100) NOT NULL,
    sodienthoai             VARCHAR(15)  NOT NULL,
    diachi                  NVARCHAR(255) NOT NULL,
    ghichu                  NVARCHAR(500),
    phuongthucthanhtoan     NVARCHAR(50),
    tongtien                DECIMAL(18,0),
    trangthaidonhang        NVARCHAR(50) DEFAULT 'Chờ xác nhận',
    ngaydat                 DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ── Bảng ChiTietDonHang ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ChiTietDonHang (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    donhang_id  INT NOT NULL,
    sanpham_id  INT NOT NULL,
    soluongmua  INT NOT NULL,
    giamua      DECIMAL(18,0) NOT NULL,
    FOREIGN KEY (donhang_id) REFERENCES DonHang(id),
    FOREIGN KEY (sanpham_id) REFERENCES SanPham(id)
);

-- ── Insert DanhMuc ───────────────────────────────────────────────────
INSERT IGNORE INTO DanhMuc (tendanhmuc, slug) VALUES
('Laptop',    'laptop'),
('PC',        'pc'),
('Chuột',     'mouse'),
('Bàn phím',  'keyboard'),
('Màn hình',  'monitor'),
('Tai nghe',  'headphone'),
('VGA',       'vga'),
('RAM',       'ram'),
('Micro',     'mic'),
('Tay cầm',   'ps');

-- ── Insert ThuongHieu ────────────────────────────────────────────────
INSERT IGNORE INTO ThuongHieu (tenthuonghieu) VALUES
('ACER'),('LENOVO'),('GIGABYTE'),('MSI'),('LG'),('GAMING'),
('AULA'),('AKKO'),('DAREU'),('RAZER'),('LOGITECH'),
('E-DRA'),('ViewSonic'),('Asus TUF GAMING'),('AOC'),('Acer'),
('Corsair'),('Kingmax'),('Adata'),('Skywalker'),('Kingston'),
('ASUS'),('ZOTAC'),('HYPERX'),('HyperX'),('DareU'),
('Sony'),('Microsoft'),('Logitech'),('MSI');

-- ── Insert SanPham ───────────────────────────────────────────────────
INSERT INTO SanPham (tensp, danhmuc_id, thuonghieu_id, giagoc, giaban, soluongtonkho, hinhanh, mota, noibat) VALUES

-- LAPTOP
('Laptop gaming Acer Nitro Lite 16 NL16 71G 56WQ',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='ACER'),
 26790000, 25490000, 10, 'assest/img/lap1.png', 'Hiệu năng ổn định từ Intel Core i5 thế hệ 13 và RTX 3050.', 1),

('Laptop gaming Lenovo Legion 5 15IRX10 83LY004GVN',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LENOVO'),
 54990000, 52990000, 5, 'assest/img/lap2.png', 'Hiệu suất mạnh mẽ và thiết kế tinh tế.', 1),

('Laptop gaming Acer Nitro ProPanel ANV15-52-72BM',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='ACER'),
 38990000, 34990000, 8, 'assest/img/lap3.png', 'Cân bằng tốt giữa hiệu năng, chất lượng hiển thị và tản nhiệt.', 1),

('Laptop gaming Gigabyte A16 CMHH2VN893SH',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GIGABYTE'),
 29790000, 27990000, 7, 'assest/img/lap4.png', 'Ngoại hình văn phòng nhưng sức mạnh lý tưởng cho gaming.', 1),

('Laptop gaming MSI Katana 15 HX B14WEK 295VN',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='MSI'),
 38790000, 34490000, 6, 'assest/img/lap5.png', 'Bộ vi xử lý mạnh mẽ và card đồ họa cao cấp.', 1),

('Laptop gaming Lenovo LOQ 15IRX10 83JE00PEVN',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LENOVO'),
 37790000, 35490000, 4, 'assest/img/lap6.png', 'CPU Intel Core i7-13650HX, GPU RTX 5050 8GB, 16GB RAM.', 1),

('Laptop LG Gram Book 15U50T-G.AV56A5',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LG'),
 17790000, 16500000, 9, 'assest/img/lap7.png', 'IPS 15.6 inch Full HD, RAM 16GB DDR4, chỉ nặng 1.7kg.', 1),

-- PC
('PC Intel i5-14400F/ VGA RTX 5060 Ti',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GAMING'),
 28580000, 25990000, 8, 'assest/img/pc1.jpg', 'GIGABYTE B760M, CPU i5-14400F, VGA RTX 5060 Ti 8GB GDDR7.', 1),

('PC Intel i5-14400F/VGA ARC B580',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GAMING'),
 24020000, 21990000, 6, 'assest/img/pc2.jpg', 'CPU i5-14400F, VGA Intel Arc B580 12GB.', 1),

('PC Intel Core Ultra 7 265F/ VGA RTX 5070Ti',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GAMING'),
 67420000, 66990000, 3, 'assest/img/pc3.jpg', 'CPU Intel Core Ultra 7 265F, VGA RTX 5070 Ti, RAM DDR5.', 1),

('PC ASUS ROG HATSUNE MIKU EDITION (AMD Ryzen 7 9800X3D/VGA RTX 5080)',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GAMING'),
 139790000, 128990000, 2, 'assest/img/pc4.png', 'AMD Ryzen 7 9800X3D, VGA RTX 5080, RAM 32GB DDR5 Hatsune Miku Edition.', 1),

('PC ASUS - Extreme (AMD Ryzen 9 9950X3D/VGA RTX 5090)',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GAMING'),
 252290000, 233990000, 1, 'assest/img/pc5.png', 'AMD Ryzen 9 9950X3D, VGA RTX 5090 32GB, RAM 64GB DDR5.', 1),

('PC Intel i7-14700F/ VGA RTX 3050',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GAMING'),
 33120000, 31590000, 5, 'assest/img/pc6.jpg', 'CPU i7-14700F 20 nhân 28 luồng, VGA RTX 3050 6GB.', 1),

-- BÀN PHÍM
('Bàn phím AULA F99 (Xanh dương + Trắng + Tím đậm/ Grey Wood V3 switch) F9908',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='AULA'),
 1900000, 1490000, 20, 'assest/img/kb1.png', 'Thiết kế mới lạ, chất lượng hoàn thiện cao, trải nghiệm gõ êm ái.', 1),

('Bàn phím cơ AKKO MOD 007B HE PC Joy of Life',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='AKKO'),
 4120000, 3290000, 15, 'assest/img/kb2.png', 'Phiên bản giới hạn lấy cảm hứng từ bộ phim Joy of Life.', 1),

('Bàn phím cơ DareU EK98L Grey Black Dream switch',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='DAREU'),
 690000, 590000, 30, 'assest/img/kb3.png', 'Phân khúc tầm trung đáp ứng nhu cầu giải trí và làm việc.', 1),

('Bàn phím AULA S100 PRO TM (Xanh dương+trắng+tím đậm/ Brown switch) S100PRO02',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='AULA'),
 869000, 790000, 25, 'assest/img/kb4.png', 'Thiết kế nổi bật, chất liệu bền bỉ, mức giá hợp lý.', 1),

('Bàn phím có dây Razer BlackWidow V4 75% Phantom White Edition',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='RAZER'),
 NULL, 5390000, 12, 'assest/img/kb5.png', 'Layout 75%, thiết kế Phantom White bán trong suốt với LED RGB.', 1),

-- CHUỘT
('Chuột Logitech G102 LightSync White',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LOGITECH'),
 700000, 410000, 50, 'assest/img/mouse5.jpg', 'Led RGB 16.8 triệu màu, đồng bộ LIGHTSYNC.', 1),

('Chuột Razer Không dây Viper V4 Pro Trắng',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='RAZER'),
 NULL, 4490000, 10, 'assest/img/mouse1.jpg', 'Phiên bản trắng sang trọng, công nghệ mạnh nhất cho eSports.', 1),

('Chuột Logitech G Pro X Superlight 2 SE White',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LOGITECH'),
 3190000, 2740000, 15, 'assest/img/mouse2.jpg', 'Siêu nhẹ, cảm biến HERO 2, công nghệ LIGHTSPEED.', 1),

('Chuột DareU Không dây EM911T RGB Trắng',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='DAREU'),
 690000, 400000, 40, 'assest/img/mouse3.jpg', 'Thiết kế trẻ trung, gọn nhẹ, kết nối linh hoạt.', 1),

('Chuột DareU EM901X RGB Superlight Wireless Pink',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='DAREU'),
 1090000, 700000, 20, 'assest/img/mouse.jpg', '6 nút bấm, tuổi thọ 10 triệu click, thiết kế đối xứng 86g.', 1),

('Chuột Logitech G502 X Plus LightSpeed White',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LOGITECH'),
 3890000, 3490000, 8, 'assest/img/mouse4.png', 'Lightforce hybrid switch, LIGHTSPEED, cảm biến Hero 25K.', 1),

-- MÀN HÌNH
('Màn hình E-DRA EGM25F260PVS 25" IPS 260Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='E-DRA'),
 2990000, 2890000, 15, 'assest/img/monitor1.jpg', 'FAST IPS Full HD 260Hz, 25 inch.', 1),

('Màn hình ViewSonic VX2528 25" IPS 180Hz Gsync chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='ViewSonic'),
 3790000, 2990000, 12, 'assest/img/monitor2.jpg', 'Tần số quét 180Hz và công nghệ GSync.', 1),

('Màn hình Asus TUF GAMING VG249QE5A 24" IPS 146Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Asus TUF GAMING'),
 3990000, 2590000, 10, 'assest/img/scr.jpg', '24 inch IPS 146Hz, nhiều tính năng gaming hiện đại.', 1),

('Màn hình MSI MPG 272QRF X36 27" Rapid IPS 2K 360Hz Gsync Pulsar chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='MSI'),
 21990000, 21490000, 5, 'assest/img/monitor3.jpg', '27 inch WQHD Rapid IPS 360Hz cho eSports.', 1),

('Màn hình MSI MAG 272QP QD-OLED X24 27" QD-OLED 2K 240Hz',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='MSI'),
 23990000, 14490000, 7, 'assest/img/monitor4.jpg', 'QD-OLED thế hệ mới, độ đen sâu, phản hồi siêu nhanh.', 1),

('Màn hình AOC Q27G4K 27" Fast IPS 2K 420Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='AOC'),
 9690000, 9090000, 8, 'assest/img/monitor5.jpg', '27 inch QHD Fast IPS 420Hz.', 1),

('Màn hình cong AOC C32G42ZE 32" 260Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='AOC'),
 5490000, 4590000, 10, 'assest/img/monitor6.jpg', '32 inch cong 1500R, tấm nền VA, 260Hz.', 1),

('Màn hình Acer KG271U W3 27" IPS 2K 240Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Acer'),
 6990000, 4690000, 9, 'assest/img/monitor7.jpg', '27 inch 2K IPS 240Hz.', 1),

('Màn hình cong LG 40U990A-W 40" IPS 4K 120Hz USBC',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='LG'),
 47990000, 40990000, 3, 'assest/img/monitor8.jpg', '40 inch 5K2K Nano IPS Black 120Hz.', 1),

('Màn hình Asus ROG Strix XG27ACMS 27" Fast IPS 2K 320Hz USBC chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Asus TUF GAMING'),
 9490000, 8590000, 6, 'assest/img/monitor9.jpg', '27 inch QHD Fast IPS 320Hz.', 1),

-- RAM
('RAM Corsair Dominator Titanium Black 96GB (2x48GB) RGB 6600 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Corsair'),
 39490000, 38590000, 4, 'assest/img/ram1.png', 'Tiêu chuẩn cao nhất, kiểm tra nghiêm ngặt cho ép xung.', 1),

('Ram Kingmax Blade X 1x16GB DDR4 Bus 3200Mhz',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Kingmax'),
 4990000, 4690000, 20, 'assest/img/ram2.png', 'Hiệu năng ổn định, phù hợp PC gaming 1080p.', 1),

('RAM Corsair Dominator Titanium White 64GB (2x32GB) RGB 6000 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Corsair'),
 31990000, 24490000, 5, 'assest/img/ram3.png', 'Tương thích Intel XMP 3.0 và AMD EXPO.', 1),

('Ram Corsair Vengeance RGB White 32GB (2x16GB) 5600 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Corsair'),
 NULL, 5690000, 15, 'assest/img/ram4.png', '32GB DDR5 5600MHz RGB trắng.', 1),

('RAM Adata XPG Lancer 1x16GB 6000mhz DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Adata'),
 5490000, 4490000, 18, 'assest/img/ram5.png', 'DDR5 6000MHz hiệu năng cao.', 1),

('Ram V-Color Skywalker Plus 1x8GB 3600 RGB White DDR4',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Skywalker'),
 1690000, 1290000, 25, 'assest/img/ram6.png', 'RGB trắng, DDR4 3600MHz.', 1),

('RAM Kingston FURY Renegade RGB 48GB (2x24GB) Limited Edition bus 8000 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Kingston'),
 NULL, 10990000, 6, 'assest/img/ram7.png', 'Limited Edition, DDR5 8000MHz, RGB.', 1),

('RAM Kingston Fury Beast 1x8GB 3600 DDR4 RGB',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Kingston'),
 NULL, 890000, 30, 'assest/img/ram8.png', 'DDR4 3600MHz RGB.', 1),

-- VGA
('Card màn hình ASUS ROG Astral GeForce RTX 5080 16GB GDDR7 Hatsune Miku Edition',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='ASUS'),
 NULL, 54120000, 3, 'assest/img/vga1.png', 'RTX 5080 16GB GDDR7, 3 quạt, DirectX 12 Ultimate.', 1),

('Card màn hình ZOTAC GAMING GeForce RTX 5070 AMP White Edition',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='ZOTAC'),
 19990000, 18990000, 7, 'assest/img/vga2.png', 'RTX 5070 toàn trắng, kiến trúc NVIDIA Blackwell.', 1),

('Card màn hình ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='ASUS'),
 135000000, 134990000, 2, 'assest/img/vga3.png', 'RTX 5090 32GB GDDR7, 4 quạt, DLSS 4.', 1),

('Card màn hình MSI GeForce RTX 5090 LIGHTNING Z 32GB',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='MSI'),
 209500000, 199990000, 1, 'assest/img/vga4.jpg', 'RTX 5090 32GB, DisplayPort 2.1 x3.', 1),

('Card Màn Hình Gigabyte Radeon RX 7900 XTX Aorus Elite 24G',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='GIGABYTE'),
 NULL, 33990000, 5, 'assest/img/vga5.jpg', 'AMD Radeon RX 7900 XTX 24GB AORUS Elite.', 1),

-- TAI NGHE
('Tai nghe HP HYPERX Cloud Earbuds II Red',
 (SELECT id FROM DanhMuc WHERE slug='headphone'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='HYPERX'),
 1090000, 750000, 20, 'assest/img/hp1.jpg', 'In-ear chất lượng cao, cải tiến về thiết kế và âm thanh.', 1),

('Tai nghe không dây AKKO GH300 White',
 (SELECT id FROM DanhMuc WHERE slug='headphone'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='AKKO'),
 1190000, 890000, 15, 'assest/img/ear.jpg', 'Không dây trùm tai, kết nối linh hoạt.', 1),

('Tai nghe không dây Logitech G325 LIGHTSPEED White',
 (SELECT id FROM DanhMuc WHERE slug='headphone'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Logitech'),
 2790000, 2390000, 10, 'assest/img/hp2.jpg', '212g nhẹ nhàng, LIGHTSPEED + Bluetooth.', 1),

-- MICRO
('Micro HyperX QuadCast 2 Black',
 (SELECT id FROM DanhMuc WHERE slug='mic'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='HyperX'),
 4190000, 3750000, 10, 'assest/img/micro.png', 'Micro Stream cao cấp cho streamer, chất lượng phòng thu.', 1),

('Micro HyperX FlipCast',
 (SELECT id FROM DanhMuc WHERE slug='mic'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='HyperX'),
 NULL, 6000000, 6, 'assest/img/micro1.jpg', 'Dynamic mic, USB + XLR cho streamer và podcaster.', 1),

-- TAY CẦM
('Tay cầm DareU H105 Wireless Trắng Tím',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='DareU'),
 799000, 650000, 25, 'assest/img/tc.png', 'Không dây, Dual motor, Motion Control.', 1),

('Tay cầm Logitech Driving G29 Driving Force',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Logitech'),
 7799000, 6930000, 5, 'assest/img/tc1.jpg', 'Vô lăng racing Dual motor, lực feedback chân thực.', 1),

('Tay cầm Sony PS5 DualSense White',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Sony'),
 NULL, 1990000, 20, 'assest/img/tc2.jpg', 'Haptic Feedback, Adaptive Trigger.', 1),

('Tay cầm Microsoft XBOX ONE S',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu='Microsoft'),
 1990000, 1600000, 15, 'assest/img/tc3.jpg', 'Dual motor + Impulse Triggers, Bluetooth.', 1);

SELECT COUNT(*) AS TongSanPham FROM SanPham;
