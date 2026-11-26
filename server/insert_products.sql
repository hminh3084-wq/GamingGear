USE ThietBiDienTu;
GO

-- Thêm thương hiệu còn thiếu
INSERT INTO ThuongHieu (tenthuonghieu)
SELECT val FROM (VALUES
    (N'LOGITECH'),(N'AKKO'),(N'RAZER'),(N'E-DRA'),(N'ViewSonic'),
    (N'Asus TUF GAMING'),(N'AOC'),(N'Acer'),(N'Corsair'),(N'Kingmax'),
    (N'Adata'),(N'Skywalker'),(N'Kingston'),(N'ASUS'),(N'ZOTAC'),
    (N'Gigabyte'),(N'HYPERX'),(N'HyperX'),(N'DareU'),(N'Sony'),
    (N'Microsoft'),(N'Logitech'),(N'DAREU'),(N'AULA'),(N'MSI')
) AS T(val)
WHERE val NOT IN (SELECT tenthuonghieu FROM ThuongHieu);
GO

-- Xóa sản phẩm mẫu cũ nếu có (tránh trùng)
DELETE FROM SanPham WHERE id <= 56;
DBCC CHECKIDENT ('SanPham', RESEED, 0);
GO

-- ===================== INSERT 56 SẢN PHẨM =====================
INSERT INTO SanPham (tensp, danhmuc_id, thuonghieu_id, giagoc, giaban, soluongtonkho, hinhanh, mota, noibat)
VALUES

-- LAPTOP (1-7)
(N'Laptop gaming Acer Nitro Lite 16 NL16 71G 56WQ',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'ACER'),
 26790000, 25490000, 10, N'assest/img/lap1.png',
 N'Sở hữu hiệu năng ổn định từ bộ vi xử lý Intel Core i5 thế hệ 13 và card đồ họa RTX 3050.', 1),

(N'Laptop gaming Lenovo Legion 5 15IRX10 83LY004GVN',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LENOVO'),
 54990000, 52990000, 5, N'assest/img/lap2.png',
 N'Laptop Gaming Lenovo Legion 5 15IRX10 83LY004GVN với hiệu suất mạnh mẽ và thiết kế tinh tế.', 1),

(N'Laptop gaming Acer Nitro ProPanel ANV15-52-72BM',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'ACER'),
 38990000, 34990000, 8, N'assest/img/lap3.png',
 N'Cân bằng tốt giữa hiệu năng, chất lượng hiển thị và khả năng tản nhiệt.', 1),

(N'Laptop gaming Gigabyte A16 CMHH2VN893SH',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GIGABYTE'),
 29790000, 27990000, 7, N'assest/img/lap4.png',
 N'Ngoại hình văn phòng nhưng ẩn giấu sức mạnh lý tưởng cho gaming.', 1),

(N'Laptop gaming MSI Katana 15 HX B14WEK 295VN',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'MSI'),
 38790000, 34490000, 6, N'assest/img/lap5.png',
 N'Sự lựa chọn xuất sắc với bộ vi xử lý mạnh mẽ và card đồ họa cao cấp.', 1),

(N'Laptop gaming Lenovo LOQ 15IRX10 83JE00PEVN',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LENOVO'),
 37790000, 35490000, 4, N'assest/img/lap6.png',
 N'CPU Intel Core i7-13650HX, GPU NVIDIA GeForce RTX 5050 8GB, 16GB RAM và 512GB SSD.', 1),

(N'Laptop LG Gram Book 15U50T-G.AV56A5',
 (SELECT id FROM DanhMuc WHERE slug='laptop'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LG'),
 17790000, 16500000, 9, N'assest/img/lap7.png',
 N'Màn hình IPS 15.6 inch Full HD, RAM 16GB DDR4, SSD Gen4 512GB, chỉ nặng 1.7kg.', 1),

-- PC (8-13)
(N'PC Intel i5-14400F/ VGA RTX 5060 Ti',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GAMING'),
 28580000, 25990000, 8, N'assest/img/pc1.jpg',
 N'Mainboard GIGABYTE B760M, CPU i5-14400F, VGA RTX 5060 Ti 8GB GDDR7.', 1),

(N'PC Intel i5-14400F/VGA ARC B580',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GAMING'),
 24020000, 21990000, 6, N'assest/img/pc2.jpg',
 N'CPU i5-14400F, VGA Intel Arc B580 12GB, PSU FSP HV PRO 650W.', 1),

(N'PC Intel Core Ultra 7 265F/ VGA RTX 5070Ti',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GAMING'),
 67420000, 66990000, 3, N'assest/img/pc3.jpg',
 N'CPU Intel Core Ultra 7 265F, VGA RTX 5070 Ti, RAM DDR5 16GB.', 1),

(N'PC ASUS ROG HATSUNE MIKU EDITION (AMD Ryzen 7 9800X3D/VGA RTX 5080)',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GAMING'),
 139790000, 128990000, 2, N'assest/img/pc4.png',
 N'AMD Ryzen 7 9800X3D, VGA RTX 5080, RAM 32GB DDR5 6000MHz Hatsune Miku Edition.', 1),

(N'PC ASUS - Extreme (AMD Ryzen 9 9950X3D/VGA RTX 5090)',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GAMING'),
 252290000, 233990000, 1, N'assest/img/pc5.png',
 N'AMD Ryzen 9 9950X3D, VGA RTX 5090 32GB, RAM 64GB DDR5.', 1),

(N'PC Intel i7-14700F/ VGA RTX 3050',
 (SELECT id FROM DanhMuc WHERE slug='pc'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'GAMING'),
 33120000, 31590000, 5, N'assest/img/pc6.jpg',
 N'CPU i7-14700F 20 nhân 28 luồng, VGA RTX 3050 6GB, RAM 16GB DDR4.', 1),

-- BÀN PHÍM (14-18)
(N'Bàn phím AULA F99 (Xanh dương + Trắng + Tím đậm/ Grey Wood V3 switch) F9908',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'AULA'),
 1900000, 1490000, 20, N'assest/img/kb1.png',
 N'Thiết kế mới lạ, chất lượng hoàn thiện cao, trải nghiệm gõ êm ái.', 1),

(N'Bàn phím cơ AKKO MOD 007B HE PC Joy of Life',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'AKKO'),
 4120000, 3290000, 15, N'assest/img/kb2.png',
 N'Phiên bản bàn phím giới hạn lấy cảm hứng từ bộ phim cổ trang Joy of Life.', 1),

(N'Bàn phím cơ DareU EK98L Grey Black Dream switch',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'DAREU'),
 690000, 590000, 30, N'assest/img/kb3.png',
 N'Phân khúc tầm trung đáp ứng nhu cầu giải trí và làm việc.', 1),

(N'Bàn phím AULA S100 PRO TM (Xanh dương+trắng+tím đậm/ Brown switch) S100PRO02',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'AULA'),
 869000, 790000, 25, N'assest/img/kb4.png',
 N'Thiết kế nổi bật, chất liệu bền bỉ với mức giá hợp lý.', 1),

(N'Bàn phím có dây Razer BlackWidow V4 75% Phantom White Edition',
 (SELECT id FROM DanhMuc WHERE slug='keyboard'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'RAZER'),
 NULL, 5390000, 12, N'assest/img/kb5.png',
 N'Layout 75% tối ưu hóa, thiết kế Phantom White bán trong suốt với LED RGB.', 1),

-- CHUỘT (19-24)
(N'Chuột Logitech G102 LightSync White',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LOGITECH'),
 700000, 410000, 50, N'assest/img/mouse5.jpg',
 N'Led RGB 16.8 triệu màu, có thể đồng bộ với thiết bị LIGHTSYNC khác.', 1),

(N'Chuột Razer Không dây Viper V4 Pro Trắng',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'RAZER'),
 NULL, 4490000, 10, N'assest/img/mouse1.jpg',
 N'Phiên bản trắng sang trọng, công nghệ phần cứng mạnh nhất cho game thủ eSports.', 1),

(N'Chuột Logitech G Pro X Superlight 2 SE White',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LOGITECH'),
 3190000, 2740000, 15, N'assest/img/mouse2.jpg',
 N'Siêu nhẹ, cảm biến HERO 2, công nghệ LIGHTSPEED không dây.', 1),

(N'Chuột DareU Không dây EM911T RGB Trắng',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'DAREU'),
 690000, 400000, 40, N'assest/img/mouse3.jpg',
 N'Thiết kế trẻ trung, gọn nhẹ, kết nối linh hoạt.', 1),

(N'Chuột DareU EM901X RGB Superlight Wireless Pink',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'DAREU'),
 1090000, 700000, 20, N'assest/img/mouse.jpg',
 N'6 nút bấm, tuổi thọ 10 triệu click, thiết kế đối xứng chỉ 86g.', 1),

(N'Chuột Logitech G502 X Plus LightSpeed White',
 (SELECT id FROM DanhMuc WHERE slug='mouse'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LOGITECH'),
 3890000, 3490000, 8, N'assest/img/mouse4.png',
 N'Lightforce hybrid switch, LIGHTSPEED không dây, cảm biến Hero 25K.', 1),

-- MÀN HÌNH (25-34)
(N'Màn hình E-DRA EGM25F260PVS 25" IPS 260Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'E-DRA'),
 2990000, 2890000, 15, N'assest/img/monitor1.jpg',
 N'FAST IPS Full HD 260Hz, xóa bỏ ghosting, kích thước 25 inch.', 1),

(N'Màn hình ViewSonic VX2528 25" IPS 180Hz Gsync chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'ViewSonic'),
 3790000, 2990000, 12, N'assest/img/monitor2.jpg',
 N'Tần số quét 180Hz và công nghệ GSync, chống giật lag.', 1),

(N'Màn hình Asus TUF GAMING VG249QE5A 24" IPS 146Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Asus TUF GAMING'),
 3990000, 2590000, 10, N'assest/img/scr.jpg',
 N'24 inch IPS 146Hz, nhiều tính năng hiện đại phục vụ chơi game.', 1),

(N'Màn hình MSI MPG 272QRF X36 27" Rapid IPS 2K 360Hz Gsync Pulsar chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'MSI'),
 21990000, 21490000, 5, N'assest/img/monitor3.jpg',
 N'27 inch WQHD Rapid IPS 360Hz, dành riêng cho game thủ eSports.', 1),

(N'Màn hình MSI MAG 272QP QD-OLED X24 27" QD-OLED 2K 240Hz',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'MSI'),
 23990000, 14490000, 7, N'assest/img/monitor4.jpg',
 N'QD-OLED thế hệ mới, độ đen sâu, thời gian phản hồi siêu nhanh.', 1),

(N'Màn hình AOC Q27G4K 27" Fast IPS 2K 420Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'AOC'),
 9690000, 9090000, 8, N'assest/img/monitor5.jpg',
 N'27 inch QHD Fast IPS 420Hz, phù hợp cho rank FPS MOBA battle royale.', 1),

(N'Màn hình cong AOC C32G42ZE 32" 260Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'AOC'),
 5490000, 4590000, 10, N'assest/img/monitor6.jpg',
 N'32 inch cong 1500R, tấm nền VA sống động, 260Hz.', 1),

(N'Màn hình Acer KG271U W3 27" IPS 2K 240Hz chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Acer'),
 6990000, 4690000, 9, N'assest/img/monitor7.jpg',
 N'27 inch 2K IPS 240Hz, chất lượng hình ảnh vượt xa Full HD.', 1),

(N'Màn hình cong LG 40U990A-W 40" IPS 4K 120Hz USBC',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'LG'),
 47990000, 40990000, 3, N'assest/img/monitor8.jpg',
 N'40 inch 5K2K Nano IPS Black 120Hz, lý tưởng cho edit video và thiết kế đồ họa.', 1),

(N'Màn hình Asus ROG Strix XG27ACMS 27" Fast IPS 2K 320Hz USBC chuyên game',
 (SELECT id FROM DanhMuc WHERE slug='monitor'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Asus TUF GAMING'),
 9490000, 8590000, 6, N'assest/img/monitor9.jpg',
 N'27 inch QHD Fast IPS 320Hz, không lo mờ nhòe hay xé hình.', 1),

-- RAM (35-42)
(N'RAM Corsair Dominator Titanium Black 96GB (2x48GB) RGB 6600 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Corsair'),
 39490000, 38590000, 4, N'assest/img/ram1.png',
 N'Chế tạo theo tiêu chuẩn cao nhất, kiểm tra nghiêm ngặt cho ép xung.', 1),

(N'Ram Kingmax Blade X 1x16GB DDR4 Bus 3200Mhz',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Kingmax'),
 4990000, 4690000, 20, N'assest/img/ram2.png',
 N'Tầm trung hướng tới hiệu năng ổn định, phù hợp PC gaming 1080p.', 1),

(N'RAM Corsair Dominator Titanium White 64GB (2x32GB) RGB 6000 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Corsair'),
 31990000, 24490000, 5, N'assest/img/ram3.png',
 N'Tương thích Intel XMP 3.0 và AMD EXPO, tùy chỉnh qua phần mềm iCUE.', 1),

(N'Ram Corsair Vengeance RGB White 32GB (2x16GB) 5600 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Corsair'),
 NULL, 5690000, 15, N'assest/img/ram4.png',
 N'32GB DDR5 5600MHz RGB trắng sang trọng.', 1),

(N'RAM Adata XPG Lancer 1x16GB 6000mhz DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Adata'),
 5490000, 4490000, 18, N'assest/img/ram5.png',
 N'DDR5 6000MHz hiệu năng cao.', 1),

(N'Ram V-Color Skywalker Plus 1x8GB 3600 RGB White DDR4',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Skywalker'),
 1690000, 1290000, 25, N'assest/img/ram6.png',
 N'RGB trắng, DDR4 3600MHz, có tản nhiệt.', 1),

(N'RAM Kingston FURY Renegade RGB 48GB (2x24GB) Limited Edition bus 8000 DDR5',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Kingston'),
 NULL, 10990000, 6, N'assest/img/ram7.png',
 N'Limited Edition, DDR5 8000MHz, RGB, băng thông 64 Gb/s.', 1),

(N'RAM Kingston Fury Beast 1x8GB 3600 DDR4 RGB',
 (SELECT id FROM DanhMuc WHERE slug='ram'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Kingston'),
 NULL, 890000, 30, N'assest/img/ram8.png',
 N'DDR4 3600MHz RGB, băng thông 28.8 Gb/s, có tản nhiệt.', 1),

-- VGA (43-47)
(N'Card màn hình ASUS ROG Astral GeForce RTX 5080 16GB GDDR7 Hatsune Miku Edition',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'ASUS'),
 NULL, 54120000, 3, N'assest/img/vga1.png',
 N'RTX 5080 16GB GDDR7, 3 quạt, DLSS hỗ trợ, DirectX 12 Ultimate.', 1),

(N'Card màn hình ZOTAC GAMING GeForce RTX 5070 AMP White Edition',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'ZOTAC'),
 19990000, 18990000, 7, N'assest/img/vga2.png',
 N'RTX 5070 toàn trắng, kiến trúc NVIDIA Blackwell, IceStorm 2.0.', 1),

(N'Card màn hình ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'ASUS'),
 135000000, 134990000, 2, N'assest/img/vga3.png',
 N'RTX 5090 32GB GDDR7, 4 quạt, DLSS 4, DisplayPort 2.1.', 1),

(N'Card màn hình MSI GeForce RTX 5090 LIGHTNING Z 32GB',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'MSI'),
 209500000, 199990000, 1, N'assest/img/vga4.jpg',
 N'RTX 5090 32GB, DisplayPort 2.1 x3, HDMI 2.1, DirectX 12 Ultimate.', 1),

(N'Card Màn Hình Gigabyte Radeon RX 7900 XTX Aorus Elite 24G',
 (SELECT id FROM DanhMuc WHERE slug='vga'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Gigabyte'),
 NULL, 33990000, 5, N'assest/img/vga5.jpg',
 N'AMD Radeon RX 7900 XTX 24GB AORUS Elite, hiệu năng vượt trội.', 1),

-- TAI NGHE (48-50)
(N'Tai nghe HP HYPERX Cloud Earbuds II Red',
 (SELECT id FROM DanhMuc WHERE slug='headphone'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'HYPERX'),
 1090000, 750000, 20, N'assest/img/hp1.jpg',
 N'In-ear chất lượng cao, nhiều cải tiến về thiết kế và hệ thống âm thanh.', 1),

(N'Tai nghe không dây AKKO GH300 White',
 (SELECT id FROM DanhMuc WHERE slug='headphone'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'AKKO'),
 1190000, 890000, 15, N'assest/img/ear.jpg',
 N'Không dây trùm tai, kết nối linh hoạt, phù hợp nhiều kiểu setup.', 1),

(N'Tai nghe không dây Logitech G325 LIGHTSPEED White',
 (SELECT id FROM DanhMuc WHERE slug='headphone'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Logitech'),
 2790000, 2390000, 10, N'assest/img/hp2.jpg',
 N'212g nhẹ nhàng, LIGHTSPEED + Bluetooth, pin lâu cho buổi chơi dài.', 1),

-- MICRO (51-52)
(N'Micro HyperX QuadCast 2 Black',
 (SELECT id FROM DanhMuc WHERE slug='mic'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'HyperX'),
 4190000, 3750000, 10, N'assest/img/micro.png',
 N'Micro Stream cao cấp cho streamer và game thủ, chất lượng phòng thu.', 1),

(N'Micro HyperX FlipCast',
 (SELECT id FROM DanhMuc WHERE slug='mic'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'HyperX'),
 NULL, 6000000, 6, N'assest/img/micro1.jpg',
 N'Dynamic mic, USB + XLR, phù hợp streamer và podcaster.', 1),

-- TAY CẦM (53-56)
(N'Tay cầm DareU H105 Wireless Trắng Tím',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'DareU'),
 799000, 650000, 25, N'assest/img/tc.png',
 N'Không dây, Dual motor, Motion Control, thiết kế trắng tím nổi bật.', 1),

(N'Tay cầm Logitech Driving G29 Driving Force',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Logitech'),
 7799000, 6930000, 5, N'assest/img/tc1.jpg',
 N'Vô lăng racing Dual motor, lực feedback chân thực.', 1),

(N'Tay cầm Sony PS5 DualSense White',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Sony'),
 NULL, 1990000, 20, N'assest/img/tc2.jpg',
 N'Haptic Feedback, Adaptive Trigger, thiết kế ergonomic.', 1),

(N'Tay cầm Microsoft XBOX ONE S',
 (SELECT id FROM DanhMuc WHERE slug='ps'), (SELECT id FROM ThuongHieu WHERE tenthuonghieu=N'Microsoft'),
 1990000, 1600000, 15, N'assest/img/tc3.jpg',
 N'Dual motor + Impulse Triggers, kết nối không dây Bluetooth.', 1);

GO

SELECT COUNT(*) AS TongSanPham FROM SanPham;
GO
