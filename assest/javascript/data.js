const products = [
    {
        id: 1,
        name: 'Laptop gaming Acer Nitro Lite 16 NL16 71G 56WQ',
        brand: 'ACER',
        price: '25.490.000đ',
        oldPrice: '26.790.000đ',
        img: './assest/img/lap1.png',
        category: 'laptop',
        desc: `Sở hữu hiệu năng ổn định từ bộ vi xử lý Intel Core i5 thế hệ 13 và card đồ họa RTX 3050, 
        kết hợp cùng màn hình 16 inch 165Hz mượt mà, Laptop gaming Acer Nitro Lite 16 NL16 71G 56WQ mang 
        đến sự cân bằng giữa làm việc và giải trí. Đây là một lựa chọn phù hợp cho các bạn sinh viên, người
        dùng sáng tạo và game thủ cần một thiết bị đa năng có thiết kế thanh lịch.`
    },
    {
        id: 2,
        name: 'Laptop gaming Lenovo Legion 5 15IRX10 83LY004GVN',
        brand: 'LENOVO',
        price: '52.990.000đ',
        oldPrice: '54.990.000đ',
        img: '/assest/img/lap2.png',
        category: 'laptop',
        desc: `Laptop Gaming Lenovo Legion 5 15IRX10 83LY004GVN là một trong những sản phẩm nổi bật 
        trong dòng laptop gaming của Lenovo, với hiệu suất mạnh mẽ và thiết kế tinh tế. Bài viết này 
        sẽ giúp bạn hiểu rõ hơn về những đặc điểm và tính năng nổi bật của sản phẩm này. `
    },
    {
        id: 3,
        name: 'Laptop gaming Acer Nitro ProPanel ANV15-52-72BM',
        brand: 'ACER',
        price: '34.990.000đ',
        oldPrice: '38.990.000đ',
        img: '/assest/img/lap3.png',
        category: 'laptop',
        desc: `Nếu bạn đang cần một chiếc laptop gaming cân bằng tốt giữa hiệu năng, chất lượng hiển thị và khả năng 
        tản nhiệt, Acer Nitro ProPanel ANV15-52-72BM là lựa chọn rất đáng xem xét. Máy phù hợp cho cả nhu cầu chơi 
        game, làm việc và học tập nhờ cấu hình mạnh, màn hình ProPanel 180Hz và hệ thống tản nhiệt hai quạt ổn định. 
        Với chính sách bảo hành 3S1 siêu tốc, bạn hoàn toàn có thể yên tâm về chất lượng dịch vụ sau bán hàng. Hãy ghé
         ngay cửa hàng của GearVN để trải nghiệm thực tế và sở hữu ngay siêu phẩm này với mức giá cực kỳ ưu đãi cùng 
         nhiều phần quà hấp dẫn đang chờ đón nhé!.`
    },
    {
        id: 4,
        name: 'Laptop gaming Gigabyte A16 CMHH2VN893SH',
        brand: 'GIGABYTE',
        price: '27.990.000đ',
        oldPrice: '29.790.000đ',
        img: '/assest/img/lap4.png',
        category: 'laptop',
        desc: `GIGABYTE luôn giữ chỗ đứng lớn trong lòng của mọi game thủ khi mang đến những sản phẩm 
        chất lượng cả về ngoại hình lẫn giá thành trên nhiều series khác nhau như AORUS, AERO. Đặc biệt,
         series GIGABYTE A nổi lên khi khoác lên mình ngoại hình vô cùng văn phòng nhưng vẫn ẩn giấu bên 
         trong là sức mạnh lý tưởng cho gaming. Và cái tên mà GEARVN sẽ đem đến cho các bạn hôm nay sẽ là 
         Gigabyte A16 CMHH2VN893SH.`
    },
    {
        id: 5, 
        name: 'Laptop gaming MSI Katana 15 HX B14WEK 295VN',
        brand: 'MSI',
        price: '34.490.000đ',
        oldPrice: '38.790.000đ',
        img: '/assest/img/lap5.png',
        category: 'laptop',
        desc: `Laptop gaming MSI Katana 15 HX B14WEK 295VN là một sự lựa chọn xuất sắc cho những ai đang tìm kiếm 
        một chiếc laptop mạnh mẽ, thiết kế đẹp và khả năng chơi game tốt. Với những tính năng nổi bật từ bộ vi xử lý, 
        card đồ họa cho đến thiết kế bàn phím và hệ thống tản nhiệt, sản phẩm này hứa hẹn mang lại trải nghiệm gaming
         tuyệt vời cho người dùng. Nếu bạn đang tìm kiếm một laptop gaming đáng tin cậy và hiệu suất cao, đây sẽ là sự
          lựa chọn không thể bỏ qua.`
    },
    {
        id: 6,
        name: 'Laptop gaming Lenovo LOQ 15IRX10 83JE00PEVN',
        brand: 'LENOVO',
        price: '35.490.000đ',
        oldPrice: '37.790.000đ',
        img: '/assest/img/lap6.png',
        category: 'laptop',
        desc: `Laptop Lenovo LOQ 15IRX10 83JE00PEVN sở hữu hiệu năng vượt trội với CPU Intel Core i7-13650HX, GPU 
        NVIDIA GeForce RTX 5050 8GB, 16GB RAM và 512GB SSD. Màn hình 15.6 inch FHD 144Hz với tấm nền IPS, cho chất 
        lượng hình ảnh sống động, mượt mà. Bên cạnh đó, dòng laptop Lenovo LOQ này được thiết kế hiện đại với bàn 
        phím RGB 24 vùng, tạo nên phong cách riêng. `
    },
    {
        id: 7,
        name: 'Laptop LG Gram Book 15U50T-G.AV56A5',
        brand: 'LG',
        price: '16.500.000đ',
        oldPrice: '17.790.000đ',
        img: '/assest/img/lap7.png',
        category: 'laptop',
        desc: `Laptop LG Gram Book 15U50T-G.AV56A5 sở hữu màn hình IPS 15.6 inch độ phân giải Full HD, RAM 16GB DDR4 
        Dual Channel cùng ổ cứng SSD Gen4 512GB. Máy sử dụng vi xử lý Intel Core i5-1334U thế hệ thứ 13 (10 nhân, 
        12MB cache), khối lượng nhẹ chỉ 1.7kg. Sản phẩm laptop Core i5 còn được trang bị webcam có màn che, hỗ trợ 
        Wi-Fi 6, Bluetooth 5.2 cùng hệ thống cổng kết nối đa dạng.`
    },
    {
        id: 8,
        name: 'PC Intel i5-14400F/ VGA RTX 5060 Ti',
        brand: 'GAMING',
        price: '25.990.000đ',
        oldPrice: '28.580.000đ',
        img: '/assest/img/pc1.jpg',
        category: 'pc',
        specs: {
            'Mainboard': 'Mainboard GIGABYTE B760M GAMING PLUS WIFI DDR4',
            'CPU': 'Bộ vi xử lý Intel Core i5 14400F (Tray)',
            'RAM': 'RAM TeamGroup Elite Plus (1×8GB) DDR4 3200MHz',
            'VGA': 'Card màn hình ZOTAC GeForce RTX 5060 Ti 8GB TWIN EDGE GDDR7',
            'HDD': 'Có thể tùy chọn',
            'SSD': 'Ổ Cứng SSD PNY CS900 500GB Sata3',
            'PSU': 'Nguồn FSP HV PRO 650W - 80 Plus Bronze',
            'Case': 'Vỏ máy tính Xigmatek QUANTUM 4AF',
            'Tản nhiệt': 'Cooler Master Hyper 212 Spectrum V3 ARGB'
        }
    },
    {
        id: 9,
        name: 'PC Intel i5-14400F/VGA ARC B580',
        brand: 'GAMING',
        price: '21.990.000đ',
        oldPrice: '24.020.000đ',
        img: '/assest/img/pc2.jpg',
        category: 'pc',
        specs: {
            'Mainboard': 'Bo mạch chủ GIGABYTE B760M D DDR4',
            'CPU': 'Bộ vi xử lý Intel Core i5 14400F (Tray)',
            'RAM': 'RAM TeamGroup Elite Plus (1×8GB) DDR4 3200MHz',
            'VGA': 'Card màn hình Intel Arc B580 12GB',
            'SDD': 'Ổ cứng SSD GIGABYTE NVMe V2 256GB (G3NVMEV2256G)',
            'PSU': 'Nguồn FSP HV PRO 650W - 80 Plus Bronze',
            'Case': 'Vỏ máy tính Xigmatek QUANTUM 4AF',
            'Tản nhiệt': 'Cooler Master Hyper 212 Spectrum V3 ARGB'
        }
    },
    {
        id: 10,
        name: 'PC Intel Core Ultra 7 265F/ VGA RTX 5070Ti',
        brand: 'GAMING',
        price: '66.990.000đ',
        oldPrice: '67.420.000đ',
        img: '/assest/img/pc3.jpg',
        category: 'pc',
        specs: {
            'Mainboard': 'Bo mạch chủ MSI Z890 GAMING PLUS WIFI(DDR5)',
            'CPU': 'Bộ vi xử lý Intel Core Ultra 7 265F (Tray)',
            'RAM': 'RAM Kingmax Horizon 16GB DDR5 Bus 5600Mhz',
            'VGA': 'Card màn hình GIGABYTE GeForce RTX 5070 Ti WINDFORCE OC SFF 16G',
            'HDD': 'Có thể tùy chọn',
            'SSD': 'Ổ cứng SSD Kingston NV3 1TB M.2 PCIe NVMe Gen4',
            'PSU': 'Nguồn máy tính Cooler Master MWE GOLD 850W V3 - 80 Plus Gold',
            'Case': 'Corsair 3500X TG Mid Tower Black',
            'Tản nhiệt': 'Tản nhiệt AIO Corsair NAUTILUS 360 ARGB Black'
        }
    },
    {
        id: 11,
        name: 'PC ASUS ROG HATSUNE MIKU EDITION (AMD Ryzen 7 9800X3D/VGA RTX 5080)',
        brand: 'GAMING',
        price: '128.990.000đ',
        oldPrice: '139.790.000đ',
        img: '/assest/img/pc4.png',
        category: 'pc',
        specs: {
            'Mainboard': 'Bo mạch chủ ASUS ROG Strix X870E- H Gaming Hatsune Miku Edition',
            'CPU': 'Bộ vi xử lý AMD Ryzen 7 9800X3D / 4.7GHz Boost 5.2GHz / 8 nhân 16 luồng',
            'RAM': 'RAM Corsair Vengeance RGB 32GB (2x16GB) 6000 DDR5 (CMH32GX5M2E6000C36)',
            'VGA': 'VGA ASUS ROG Astral GeForce RTX 5080 16GB GDDR7 Hatsune Miku Edition',
            'HDD': 'Có thể tùy chọn',
            'SSD': 'Ổ cứng SSD Kingston NV3 1TB M.2 PCIe NVMe Gen4',
            'PSU': 'Nguồn ASUS ROG THOR 1200 P3 1200W PLATINUM III Hatsune Miku Edition',
            'Case': 'Vỏ máy tính ASUS ROG Strix Helios II Hatsune Miku Edition',
            'Tản nhiệt': 'Tản nhiệt AIO ASUS ROG Ryuo IV SLC 360 ARGB Hatsune Miku Edition'
        }
    },
    {
        id: 12,
        name: 'PC ASUS - Extreme (AMD Ryzen 9 9950X3D/VGA RTX 5090)',
        brand: 'GAMING',
        price: '233.990.000đ',
        oldPrice: '252.290.000đ',
        img: '/assest/img/pc5.png',
        category: 'pc',
        specs: {
            'Mainboard': 'Mainboard ASUS ROG CROSSHAIR X870E EXTREME (DDR5)',
            'CPU': 'Bộ vi xử lý AMD Ryzen9 9950X3D / 4.3GHz Boost 5.7GHz / 16 nhân 32 luồng',
            'RAM': 'RAM Corsair Vengeance RGB 64GB (2x32GB) 6000 DDR5 Black',
            'VGA': 'ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition',
            'HDD': 'Có thể tùy chọn',
            'SSD': 'Ổ cứng SSD Kingston NV3 1TB M.2 PCIe NVMe Gen4',
            'PSU': 'Nguồn ASUS ROG THOR 1600T3 ATX 3.1, PCIe 5.0, 80 Plus Titanium,',
            'Case': 'ASUS ROG Hyperion GR701',
            'Tản nhiệt': 'Tản nhiệt AIO ASUS ROG Ryuo IV SLC 360 ARGB (Panorama)'
        }
    },
    {
        id: 13,
        name: 'PC Intel i7-14700F/ VGA RTX 3050',
        brand: 'GAMING',
        price: '31.590.000đ',
        oldPrice: '33.120.000đ',
        img: '/assest/img/pc6.jpg',
        category: 'pc',
        specs: {
            'Mainboard': 'Mainboard GIGABYTE B760M GAMING PLUS WIFI DDR4',
            'CPU': 'Bộ vi xử lý Intel Core i7 14700F/Turbo up to 5.4GHz/20 Nhân 28 Luồng',
            'RAM': 'RAM Kingmax Blade X 1x16GB DDR4 Bus 3200Mhz',
            'VGA': 'Card màn hình GIGABYTE GeForce RTX 3050 WINDFORCE OC 6G',
            'HDD': 'Có thể tùy chọn',
            'SSD': 'Ổ Cứng SSD PNY CS900 500GB Sata3',
            'PSU': 'Nguồn FSP HV PRO 650W - 80 Plus Bronze',
            'Case': 'Vỏ máy tính Corsair 3500X TG Mid Tower Black (CC-9011276-WW)',
            'Tản nhiệt': 'Tản nhiệt AIO Corsair NAUTILUS 360 ARGB Black'
        }
    },
    {
        id: 14,
        name: 'Bàn phím AULA F99 (Xanh dương + Trắng + Tím đậm/ Grey Wood V3 switch) F9908',
        brand: 'AULA',
        price: '1.490.000đ',
        oldPrice: '1.900.000đ',
        img: '/assest/img/kb1.png',
        category: 'keyboard',
        desc: `Với thiết kế mới lạ, chất lượng hoàn thiện cao, trải nghiệm gõ êm ái, bàn phím AULA F99 có 
        thể đáp ứng hầu hết mọi nhu cầu của người dùng phổ thông. Có thể nói, trong phân khúc giá này sản
         phẩm AULA F99 rất đáng được bạn đầu tư, đây không chỉ là một công cụ làm việc hiệu quả mà còn là 
         một món phụ kiện trang trí bàn làm việc độc đáo và ấn tượng.`
    },
    {
        id: 15,
        name: 'Bàn phím cơ AKKO MOD 007B HE PC Joy of Life',
        brand: 'AKKO',
        price: '3.290.000đ',
        oldPrice: '4.120.000đ',
        img: '/assest/img/kb2.png',
        category: 'keyboard',
        desc: `AKKO MOD 007B HE PC Joy of Life một phiên bản bàn phím máy tính giới hạn được lấy cảm hứng 
        từ bộ phim cổ trang “Joy of Life".`
    },
    {
        id: 16,
        name: 'Bàn phím cơ DareU EK98L Grey Black Dream switch',
        brand: 'DAREU',
        price: '590.000đ',
        oldPrice: '690.000đ',
        img: '/assest/img/kb3.png',
        category: 'keyboard',
        desc: `Bàn phím cơ DareU EK98L Grey Black Dream switch phân khúc tầm trung đáp ứng gần như tất cả 
        nhu cầu giải trí và làm việc, nếu không thể sở hữu những mẫu bàn phím cơ cao cấp như Asus ROG 
        Azoth White NX Snow, Razer Huntsman V2 Linear Optical Switch PUBG BATTLEGROUNDS Edition thì với
         DareU EK98L thiết kế đơn giản, mượt mà bạn hoàn toàn có thể yên tâm với lựa chọn này của mình.`
    },
    {
        id: 17,
        name: 'Bàn phím AULA S100 PRO TM (Xanh dương+trắng+tím đậm/ Brown switch) S100PRO02',
        brand: 'AULA',
        price: '790.000đ',
        oldPrice: '869.000đ',
        img: '/assest/img/kb4.png',
        category: 'keyboard',
        desc: `Đáng giá cho những người đam mê công nghệ và game thủ. Với thiết kế nổi bật, chất liệu bền 
        bỉ và nhiều tính năng tiện ích, sản phẩm này đáp ứng tốt nhu cầu của người dùng. Nếu bạn đang tìm 
        kiếm một bàn phím cơ chất lượng với mức giá hợp lý.`
    },
    {
        id: 18,
        name: 'Bàn phím có dây Razer BlackWidow V4 75% Phantom White Edition',
        brand: 'RAZER',
        price: '5.390.000đ',
        oldPrice: '',
        img: '/assest/img/kb5.png',
        category: 'keyboard',
        desc: `Bàn phím cơ Razer BlackWidow V4 75% Phantom White Edition RGB Hotswap Razer Switch Orange 
        RZ03-05003500-R3M1 được thiết kế với layout 75% tối ưu hóa, giữ lại đầy đủ cụm phím chức năng và 
        điều hướng trong một khung gọn gàng, lý tưởng cho game thủ hoặc người dùng văn phòng cần không 
        gian làm việc tối đa. Thiết kế Phantom White bán trong suốt không chỉ nổi bật về thẩm mỹ mà còn 
        giúp ánh sáng LED RGB lan tỏa rực rỡ hơn trong mọi góc độ sử dụng.`
    },
    {
        id: 19,
        name: 'Chuột Logitech G102 LightSync White',
        brand: 'LOGITECH',
        price: '410.000đ',
        oldPrice: '700.000đ',
        img: '/assest/img/mouse5.jpg',
        category: 'mouse',
        desc: `Dù có mức giá rất bình dân nhưng Chuột Logitech G102 Lightsync RGB lại được trang bị led  RGB 16,8 triệu màu .Chọn một màu hay trộn 3 màu, 
        hiệu ứng có sẵn hay tạo hiệu ứng của riêng bạn . Sự lựa chọn là của bạn ! Bạn còn có thể đồng bộ chuột với thiết bị LIGHTSYNC của Logitech G khác 
        giúp góc máy trở nên đồng bộ và độc đáo hơn.`
    },
     {
        id: 20,
        name: 'Chuột Razer Không dây Viper V4 Pro Trắng',
        brand: 'RAZER',
        price: '4.490.000đ',
        oldPrice: '',
        img: '/assest/img/mouse1.jpg',
        category: 'mouse',
        desc: `Chuột Razer không dây Viper V4 Pro Trắng là phiên bản nâng cấp đầy ấn tượng dành cho những ai yêu thích sự tinh tế trong góc máy chơi game của mình. 
        Khác với phiên bản màu đen truyền thống, sắc trắng của mẫu chuột Razer này mang lại vẻ ngoài hiện đại, sang trọng và rất dễ phối hợp với các dàn PC mang phong 
        cách tối giản hoặc "all-white". Thiết bị không chỉ đơn thuần là một món đồ trang trí mà còn sở hữu những công nghệ phần cứng mạnh mẽ nhất hiện nay để phục vụ cho 
        các game thủ eSports chuyên nghiệp.`
    },
     {
        id: 21,
        name: 'Chuột Logitech G Pro X Superlight 2 SE White',
        brand: 'LOGITECH',
        price: '2.740.000đ',
        oldPrice: '3.190.000đ',
        img: '/assest/img/mouse2.jpg',
        category: 'mouse',
        desc: `Chuột gaming Logitech G PRO X Superlight 2 SE là lựa chọn phù hợp cho game thủ cần một mẫu chuột không dây thuộc nhóm siêu nhẹ, mang lại cảm giác cầm nắm tự 
        nhiên cho nhiều kiểu tay và kiểu cầm khác nhau. Chuột sử dụng cảm biến HERO 2 cùng công nghệ LIGHTSPEED, hướng tới trải nghiệm điều khiển chính xác và ổn định trong 
        các tựa game bắn súng hoặc cạnh tranh cao. Nhờ thiết kế tối giản tập trung vào hiệu năng, sản phẩm dễ dàng hòa vào nhiều kiểu setup gaming hiện đại.`
    },
     {
        id: 22,
        name: 'Chuột DareU Không dây EM911T RGB Trắng',
        brand: 'DAREU',
        price: '400.000đ',
        oldPrice: '690.000đ',
        img: '/assest/img/mouse3.jpg',
        category: 'mouse',
        desc: `Chuột gaming không dây Dareu EM911T phiên bản trắng nổi bật với thiết kế trẻ trung, gọn nhẹ, phù hợp cho cả game thủ lẫn dân văn phòng. Chuột gaming mang mã 
        EM911T White từ Dareu, là sự kết hợp hoàn hảo giữa hiệu suất cao và tính linh hoạt kết nối, bạn có thể dễ dàng hòa nhập vào mọi setup làm việc hay giải trí.`
    },
     {
        id: 23,
        name: 'Chuột DareU EM901X RGB Superlight Wireless Pink',
        brand: 'DAREU',
        price: '700.000đ',
        oldPrice: '1.090.000đ',
        img: '/assest/img/mouse.jpg',
        category: 'mouse',
        desc: `DareU EM901X RGB Superlight sở hữu 6 nút bấm tiện lợi, trong đó có hai nút chính cực kì bền. Theo công bố của nhà sản xuất thì tuổi thọ phím lên đến 10 triệu 
        lần click. Các phím có độ nảy nhẹ do thiết kế vỏ phím thông minh. Chuột DareU EM901X sở hữu thiết kế đối xứng, kích thước trung bình, chỉ nặng khoảng 86g (bao gồm 
        dock sạc đi kèm) và form dáng tốt giúp bao trọn lòng bàn tay người dùng, hạn chế tối đa tình trạng mỏi tay khi sử dụng quá lâu.`
    },
     {
        id: 24,
        name: 'Chuột Logitech G502 X Plus LightSpeed White',
        brand: 'LOGITECH',
        price: '3.490.000đ',
        oldPrice: '3.890.000đ',
        img: '/assest/img/mouse4.png',
        category: 'mouse',
        desc: `Chuột Logitech G502 X PLUS White là sản phẩm mới nhất của series G502 đình đám. Được thiết kế lại và cải tiến với công nghệ chơi game hiện đại, bao gồm công 
        tắc Lightforce lai quang học - cơ học đầu tiên, Lightspeed không dây, LIGHT SYNC RGB và cảm biến quang học Hero 25K, Logitech G502 X PLUS chắc chắn là một trong 
        những gaming gear đáng mua nhất cho game thủ thời gian sắp tới.`
    },
    // monitor
    {
        id: 25,
        name: 'Màn hình E-DRA EGM25F260PVS 25" IPS 260Hz chuyên game',
        brand: 'E-DRA',
        price: '2.890.000đ',
        oldPrice: '2.990.000đ',
        img: '/assest/img/monitor1.jpg',
        category: 'monitor',
        desc: `Màn hình EDRA EGM25F260PVS 25 inch được sinh ra dành cho game thủ FPS muốn tối đa hóa tốc độ phản xạ và độ chính xác khi aim. Tấm nền FAST IPS Full HD 
        kết hợp tần số quét 260Hz  gần như xóa bỏ hoàn toàn hiện tượng ghosting, giúp mọi chuyển động trong CS2 hay Valorant đều rõ ràng, liền mạch. Kích thước 25 
        inch gọn gàng mang lại tầm nhìn tập trung, cho phép bạn theo dõi crosshair tốt hơn và giữ được lợi thế cạnh tranh trong những pha solo căng thẳng.`
    },
    {
        id: 26,
        name: 'Màn hình ViewSonic VX2528 25" IPS 180Hz Gsync chuyên game',
        brand: 'ViewSonic',
        price: '2.990.000đ',
        oldPrice: '3.790.000đ',
        img: '/assest/img/monitor2.jpg',
        category: 'monitor',
        desc: `Bạn cảm thấy khó chịu với màn hình không đủ nhanh để theo kịp thao tác trong game của bạn, màn hình xảy ra tình trạng giật lag bóng mờ khiến bạn mất mạng 
        oan uổng? Đừng để tình trạng này phá hỏng quá trình chơi game của bạn. Màn hình ViewSonic VX2528, với tần số quét 180Hz và công nghệ GSync sẽ giải quyết triệt
         để vấn đề của bạn.`
    },
    {
        id: 27,
        name: 'Màn hình Asus TUF GAMING VG249QE5A 24" IPS 146Hz chuyên game',
        brand: 'Asus TUF GAMING',
        price: '2.590.000đ',
        oldPrice: '3.990.000đ',
        img: '/assest/img/scr.jpg',
        category: 'monitor',
        desc: `Khi nhu cầu gaming ngày càng nâng cao thì sự cạnh tranh và nâng cấp là điều không thể thiếu trong các sản phẩm hiện nay, đặc biệt là về màn hình máy tính. 
        Đó cũng là lúc ASUS thể hiện sự “chịu chơi” của mình với những thành phẩm ở phân khúc 24 inch. Thương hiệu chính thức mang đến model ASUS TUF Gaming VG249QE5A 
        với nhiều tính năng hiện đại phục vụ cho nhu cầu chơi game.`
    },
    {
        id: 28,
        name: 'Màn hình MSI MPG 272QRF X36 27" Rapid IPS 2K 360Hz Gsync Pulsar chuyên game',
        brand: 'MSI',
        price: '21.490.000đ',
        oldPrice: '21.990.000đ',
        img: '/assest/img/monitor3.jpg',
        category: 'monitor',
        desc: `MSI MPG 272QRF X36 là màn hình gaming cao cấp được thiết kế dành riêng cho game thủ eSports muốn ưu tiên tốc độ, độ mượt và độ rõ chuyển động tối đa. 
        Với kích thước 27 inch, độ phân giải WQHD và tấm nền Rapid IPS, sản phẩm mang lại những khung hình sắc nét nhưng vẫn giữ được mức FPS rất cao khi kết hợp với 
        VGA mạnh. Nhờ đó, màn hình là lựa chọn hấp dẫn nếu bạn đang muốn nâng cấp trải nghiệm thi đấu trong các tựa game FPS, MOBA hay battle royale.`
    },
    {
        id: 29,
        name: 'Màn hình MSI MAG 272QP QD-OLED X24 27" QD-OLED 2K 240Hz',
        brand: 'MSI',
        price: '14.490.000đ',
        oldPrice: '23.990.000đ',
        img: '/assest/img/monitor4.jpg',
        category: 'monitor',
        desc: `MSI MAG 272QP QD-OLED X24 27" là màn hình gaming 27 inch sử dụng tấm nền QD‑Oled thế hệ mới, mang lại hình ảnh rực rỡ, độ đen sâu và thời gian phản hồi 
        siêu nhanh cho những người chơi game. Ngoài ra, thiết kế chống loá, góc nhìn rộng 178° và các công nghệ bảo vệ OLED giúp sản phẩm phù hợp cho gamer lẫn 
        streamer muốn trải nghiệm hình ảnh đỉnh cao.`
    },
    {
        id: 30,
        name: 'Màn hình AOC Q27G4K 27" Fast IPS 2K 420Hz chuyên game',
        brand: 'AOC',
        price: '9.090.000đ',
        oldPrice: '9.690.000đ',
        img: '/assest/img/monitor5.jpg',
        category: 'monitor',
        desc: `AOC Gaming Q27G4K là mẫu màn hình được AOC thiết kế hướng thẳng đến game thủ eSports và những ai theo đuổi trải nghiệm chơi game tốc độ cao, chính xác trong
         từng khung hình. Với kích thước 27 inch, độ phân giải QHD kết hợp với tấm nền Fast IPS, chiếc màn hình này vừa đảm bảo hình ảnh sắc nét, màu sắc sống động, vừa 
         giữ được độ mượt cần thiết cho thi đấu. Nhờ đó, Q27G4K phù hợp cho cả những trận rank căng thẳng lẫn nhu cầu giải trí hàng ngày với chất lượng hiển thị vượt trội.`
    },
    {
        id: 31,
        name: 'Màn hình cong AOC C32G42ZE 32" 260Hz chuyên game',
        brand: 'AOC',
        price: '4.590.000đ',
        oldPrice: '5.490.000đ',
        img: '/assest/img/monitor6.jpg',
        category: 'monitor',
        desc: `Màn hình gaming AOC C32G42ZE 32 inch chính là "người bạn đồng hành đáng tin cậy" cho các game thủ đam mê không gian rộng lớn và tốc độ bùng nổ. 
        Với thiết kế cong 1500R đậm chất gaming cùng tấm nền VA sống động, chiếc màn hình này mang đến trải nghiệm nhập vai tuyệt đối từ game FPS đến đua xe. 
        Bạn sẽ thấy mọi trận đấu trở nên kịch tính hơn bao giờ hết với hiệu suất bất ngờ này.`
    },
    {
        id: 32,
        name: 'Màn hình Acer KG271U W3 27" IPS 2K 240Hz chuyên game',
        brand: 'Acer',
        price: '4.690.000đ',
        oldPrice: '6.990.000đ',
        img: '/assest/img/monitor7.jpg',
        category: 'monitor',
        desc: `Màn hình Acer KG271U W3 là một siêu phẩm nằm trong series Nitro KG1 danh tiếng, được nâng cấp mạnh mẽ để đáp ứng khát khao của những game 
        thủ yêu cầu cao về cả độ sắc nét lẫn tốc độ. Với kích thước 27 inch cùng độ phân giải 2K trên tấm nền IPS, sản phẩm mang đến chất lượng hình ảnh 
        vượt xa tiêu chuẩn Full HD thông thường, giúp mọi chi tiết trong game trở nên sống động và chân thực hơn.`
    },
    {
        id: 33,
        name: 'Màn hình cong LG 40U990A-W 40" IPS 4K 120Hz USBC',
        brand: 'LG',
        price: '40.990.000đ',
        oldPrice: '47.990.000đ',
        img: '/assest/img/monitor8.jpg',
        category: 'monitor',
        desc: `Màn hình LG 40U990A-W là kiệt tác dành cho các creator với độ phân giải 5K2K siêu sắc nét và tần số quét 120Hz mượt mà. Tấm nền Nano IPS Black cùng độ 
        tương phản 2000:1 mang đến hình ảnh sống động, chi tiết tuyệt đối cho các tác vụ chuyên nghiệp. Với đó, bạn sẽ có không gian làm việc rộng lớn lý tưởng cho 
        edit video, thiết kế đồ họa hay lập trình đa nhiệm.`
    },
    {
        id: 34,
        name: 'Màn hình Asus ROG Strix XG27ACMS 27" Fast IPS 2K 320Hz USBC chuyên game',
        brand: 'Asus',
        price: '8.590.000đ',
        oldPrice: '9.490.000đ',
        img: '/assest/img/monitor9.jpg',
        category: 'monitor',
        desc: `Màn hình ASUS ROG Strix XG27ACMS là lựa chọn tuyệt vời cho các game thủ với kích thước 27 inch, độ phân giải QHD sắc nét và tần số quét cực nhanh 320Hz. 
        Với đó, bạn sẽ có thể đắm chìm vào thế giới gaming mà không lo mờ nhòe hay xé hình.`
    },
    //Ram
    {
        id: 35,
        name: 'RAM Corsair Dominator Titanium Black 96GB (2x48GB) RGB 6600 DDR5 (CMP96GX5M2B6600C32)',
        brand: 'Corsair',
        price: '38.590.000đ',
        oldPrice: '39.490.000đ',
        img: '/assest/img/ram1.png',
        category: 'ram',
        desc: `RAM CORSAIR DOMINATOR TITANIUM RGB là phiên bản được chế tạo với sự chính xác theo tiêu chuẩn cao nhất, ngoài ra tất cả các thành phần linh kiện cũng được 
        tỉ mỉ tới từng chi tiết và sản xuất với số lượng hạn chế. Mỗi 1 bộ sản phẩm đều được kiểm tra nghiêm ngặt để đảm bảo chắc chắn rằng nó có đủ 
        các yếu tốt kỹ thuật tốt nhất phục vụ cho ép xung, sau đó sẽ được đánh số và sẵn sàng lên kệ dành cho những người đam mê.`
    },
    {
        id: 36,
        name: 'Ram Kingmax Blade X 1x16GB DDR4 Bus 3200Mhz',
        brand: 'Kingmax',
        price: '4.690.000đ',
        oldPrice: '4.990.000đ',
        img: '/assest/img/ram2.png',
        category: 'ram',
        desc: `Kingmax Blade X 16GB DDR4 3200MHz là mô đun bộ nhớ tầm trung hướng tới người dùng yêu thích hiệu năng ổn định và thiết kế mạnh mẽ. Thanh RAM này phù hợp 
        cho PC gaming 1080p cũng như các tác vụ văn phòng đa nhiệm.`
    },
    {
        id: 37,
        name: 'RAM Corsair Dominator Titanium White 64GB (2x32GB) RGB 6000 DDR5',
        brand: 'Corsair',
        price: '24.490.000đ',
        oldPrice: '31.990.000đ',
        img: '/assest/img/ram3.png',
        category: 'ram',
        desc: `RAM CORSAIR DOMINATOR TITANIUM RGB cũng tương thích với Intel XMP 3.0 và AMD EXPO trong việc ép xung dễ dàng, bên cạnh đó người dùng có thể tùy 
        chỉnh dễ dàng qua phần mềm iCUE và lưu lại settings cho từng ứng dụng để tăng cường tối đa khả năng sử dụng`
    },
    {
        id: 38,
        name: 'Ram Corsair Vengeance RGB White 32GB (2x16GB) 5600 DDR5',
        brand: 'Corsair',
        price: '5.690.000đ',
        oldPrice: '',
        img: '/assest/img/ram4.png',
        category: 'ram',
        desc: ``
    },
     {
        id: 39,
        name: 'RAM Adata XPG Lancer 1x16GB 6000mhz DDR5',
        brand: 'Adata',
        price: '4.490.000đ',
        oldPrice: '5.490.000đ',
        img: '/assest/img/ram5.png',
        category: 'ram',
        desc: ``
    },
    {
        id: 40,
        name: 'Ram V-Color Skywalker Plus 1x8GB 3600 RGB White DDR4',
        brand: 'Skywalker',
        price: '1.290.000đ',
        oldPrice: '1.690.000đ',
        img: '/assest/img/ram6.png',
        category: 'ram',
        specs: {
            'Intel XMP': 'Có',
            'AMD EXPO': 'Không',
            'RGB/LED': 'Có',
            'Băng thông': 'C28.8 Gb/s',
            'Form Factor': 'DIMM (Desktop)',
            'Tản nhiệt': 'Có'
        }
    },
    {
        id: 41,
        name: 'RAM Kingston FURY Renegade RGB 48GB (2x24GB) Limited Edition bus 8000 DDR5',
        brand: 'Kingston',
        price: '10.990.000đ',
        oldPrice: '',
        img: '/assest/img/ram7.png',
        category: 'ram',
        specs: {
            'RGB/LED': 'Có',
            'Băng thông': '64 Gb/s',
            'Tản nhiệt': 'Có'
        }
    },
    {
        id: 42,
        name: 'RAM Kingston Fury Beast 1x8GB 3600 DDR4 RGB (KF436C17BB2A/8)',
        brand: 'Kingston',
        price: '890.000đ',
        oldPrice: '',
        img: '/assest/img/ram8.png',
        category: 'ram',
        specs: {
            'RGB/LED': 'Có',
            'Băng thông': '28.8 Gb/s',
            'Tản nhiệt': 'Có'
        }
    },
    //vga
    {
        id: 43,
        name: 'Card màn hình ASUS ROG Astral GeForce RTX 5080 16GB GDDR7 Hatsune Miku Edition',
        brand: 'ASUS',
        price: '54.120.000đ',
        oldPrice: '',
        img: '/assest/img/vga1.png',
        category: 'vga',
        specs: {
            'Cổng kết nối': 'HDMI 2.1, DisplayPort 1.4a',
            'DirectX hỗ trợ': 'DirectX 12 Ultimate',
            'Hỗ trợ DLSS': 'Có',
            'Số quạt tản nhiệt': '3 quạt',
            'Độ phân giải tối đa': '7680 x 4320 px',
            'Nhân đồ họa': 'NVIDIA'
        }
    },
    {
        id: 44,
        name: 'Card màn hình ZOTAC GAMING GeForce RTX 5070 AMP White Edition',
        brand: 'ZOTAC',
        price: '18.990.000đ',
        oldPrice: '19.990.000đ',
        img: '/assest/img/vga2.png',
        category: 'vga',
        desc: `VGA ZOTAC GAMING GeForce RTX 5070 AMP White Edition là card đồ họa cao cấp toàn trắng dành cho những ai có sở thích build PC. Dựa trên kiến trúc NVIDIA 
        Blackwell, sản phẩm có thể sẵn sàng chinh phục các tựa gaming 1440p-4K. Tản nhiệt còn mang thiết kế nhỏ gọn kết hợp hệ thống làm mát IceStorm 2.0 hoàn hảo cho 
        case ITX trắng sang trọng.`
    },
     {
        id: 45,
        name: 'Card màn hình ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition',
        brand: 'ASUS',
        price: '134.990.000đ',
        oldPrice: '135.000.000đ',
        img: '/assest/img/vga3.png',
        category: 'vga',
        specs: {
            'Cổng kết nối': '3x DisplayPort 2.1, 2x HDMI 2.1',
            'DirectX hỗ trợ': 'DirectX 12 Ultimate',
            'Hỗ trợ DLSS': 'DLSS 4',
            'Số quạt tản nhiệt': '4 quạt',
            'Độ phân giải tối đa': '7680 x 4320 px',
            'Nhân đồ họa': 'NVIDIA'
        }
    },
    {
        id: 46,
        name: 'Card màn hình MSI GeForce RTX 5090 LIGHTNING Z 32GB',
        brand: 'MSI',
        price: '199.990.000đ',
        oldPrice: '209.500.000đ',
        img: '/assest/img/vga4.jpg',
        category: 'vga',
        specs: {
            'Cổng kết nối': 'DisplayPort 2.1 x 3, HDMI 2.1 x 1, USB Type-C x 1 (Dedicated for Lightning display panel only)',
            'DirectX hỗ trợ': 'DirectX 12 Ultimate',
            'Hỗ trợ DLSS': 'Có',
            'Số quạt tản nhiệt': '3 quạt',
            'Độ phân giải tối đa': '7680 x 4320 px',
            'Nhân đồ họa': 'NVIDIA'
        }
    },
    {
        id: 47,
        name: 'Card Màn Hình Gigabyte Radeon RX 7900 XTX Aorus Elite 24G',
        brand: 'Gigabyte',
        price: '33.990.000đ',
        oldPrice: '',
        img: '/assest/img/vga5.jpg',
        category: 'vga',
        desc: `Trong giai đoạn mà RTX 40 Series đang dần xưng bá trên thị trường GPU, AMD đã chờ đợi và rồi bùng nổ cùng thế hệ card màn hình mới nhất từ chính thương hiệu, 
        AMD Radeon RX 7000 Series. Cùng với đó là sự xuất hiện của 2 GPU cao cấp là RX 7900 XT và RX 7900 XTX, AMD Radeon RX 7000 Series mang đến sự cải tiến, nâng cấp và mạnh 
        mẽ trong việc xử lý hiệu năng. Nhận được sự kết hợp cùng GIGABYTE AORUS, tạo nên sự ra đời của GIGABYTE AORUS Radeon RX 7900 XTX ELITE 24G.`
    },
    //tai nghe
    {
        id: 48,
        name: 'Tai nghe HP HYPERX Cloud Earbuds II Red',
        brand: 'HYPERX',
        price: '750.000đ',
        oldPrice: '1.090.000đ',
        img: '/assest/img/hp1.jpg',
        category: 'headphone',
        desc: `HyperX Cloud Earbuds II Red dòng tai nghe với nhiều cải tiếng mạnh mẽ về thiết kế, hệ thống âm thanh được xử lý chỉnh chu mang đến tai người chơi chất âm vô 
        cùng chất lượng. Hứa hẹn đây sẽ là một trong những dòng tai nghe in ear sở hữu âm thanh chất lượng và khả năng di động tiện lợi rất đáng trải nghiệm.`
    },
    {
        id: 49,
        name: 'Tai nghe không dây AKKO GH300 White',
        brand: 'AKKO',
        price: '890.000đ',
        oldPrice: '1.190.000đ',
        img: '/assest/img/ear.jpg',
        category: 'headphone',
        desc: `Tai nghe gaming Akko GH300 White là mẫu tai nghe không dây dành cho game thủ, phù hợp với nhiều kiểu setup máy tính khác nhau. Với thiết kế trùm tai thoải mái 
        cùng hệ thống kết nối linh hoạt, Akko GH300 White là lựa chọn đáng cân nhắc nếu bạn muốn tối giản số lượng tai nghe nhưng vẫn đảm bảo trải nghiệm âm thanh ổn định.`
    },
    {
        id: 50,
        name: 'Tai nghe không dây Logitech G325 LIGHTSPEED White',
        brand: 'Logitech',
        price: '2.390.000đ',
        oldPrice: '2.790.000đ',
        img: '/assest/img/hp2.jpg',
        category: 'headphone',
        desc: `Tai nghe gaming Logitech G325 LIGHTSPEED mang đến trải nghiệm âm thanh không dây hiện đại với trọng lượng chỉ khoảng 212 g, phù hợp cho những buổi chơi game 
        kéo dài. Sản phẩm kết hợp kết nối LIGHTSPEED và Bluetooth, cho phép bạn dễ dàng dùng với PC, console hoặc điện thoại mà vẫn giữ được độ ổn định. Đây là lựa chọn phù 
        hợp cho game thủ muốn vừa thoải mái khi đeo, vừa nghe rõ các chi tiết âm thanh quan trọng trong game.`
    },
    //micro
    {
        id: 51,
        name: 'Micro HyperX QuadCast 2 Black',
        brand: 'HyperX',
        price: '3.750.000đ',
        oldPrice: '4.190.000đ',
        img: '/assest/img/micro.png',
        category: 'mic',
        desc: `HyperX QuadCast 2 là chiếc micro Stream cao cấp, thiết kế dành riêng cho những người sáng tạo nội dung, streamer và game thủ chuyên nghiệp. Với khả năng ghi 
        âm chất lượng phòng thu và nhiều tính năng hiện đại, chiếc Micro HyperX này giúp bạn nâng tầm trải nghiệm ghi âm và phát trực tiếp với âm thanh rõ ràng, sắc nét và 
        chuyên nghiệp.`
    },
    {
        id: 52,
        name: 'Micro HyperX FlipCast',
        brand: 'HyperX',
        price: '6.000.000đ',
        oldPrice: '',
        img: '/assest/img/micro1.jpg',
        category: 'mic',
        desc: `HyperX FlipCast là chiếc micro dynamic đa năng, vừa hỗ trợ kết nối USB, vừa có cổng XLR truyền thống, phù hợp với các streamer, podcaster và người làm nội 
        dung muốn có âm thanh chất lượng cao. Với khả năng kết nối linh hoạt, bạn có thể dễ dàng sử dụng micro cùng cả máy tính và dàn âm thanh chuyên nghiệp.`
    },
    //tay cầm
    {
        id: 53,
        name: 'Tay cầm DareU H105 Wireless Trắng Tím',
        brand: 'DareU',
        price: '650.000đ',
        oldPrice: '799.000đ',
        img: '/assest/img/tc.png',
        category: 'ps',
        specs: {
            'Loại rung': 'Dual motor',
            'Motion Control': 'Có',
            'Tính năng rung': 'Có'
        }
    },
    {
        id: 54,
        name: 'Tay cầm Logitech Driving G29 Driving Force',
        brand: 'Logitech',
        price: '6.930.000đ',
        oldPrice: '7.799.000đ',
        img: '/assest/img/tc1.jpg',
        category: 'ps',
        specs: {
            'Loại rung': 'Dual motor',
            'Motion Control': 'Không',
            'Tính năng rung': 'Có'
        }
    },
    {
        id: 55,
        name: 'Tay cầm Sony PS5 DualSense White',
        brand: 'Sony',
        price: '1.990.000đ',
        oldPrice: '',
        img: '/assest/img/tc2.jpg',
        category: 'ps',
        specs: {
            'Loại rung': 'Haptic Feedback',
            'Công nghệ Joystick': 'Analog truyền thống',
            'Công nghệ Trigger': 'Adaptive Trigger',
            'Số nút Macro/lập trình': '0 nút',
            'Motion Control': 'Không',
            'Tính năng rung': 'Haptic Feedback, Rung phản hồi'
        }
    },
    {
        id: 56,
        name: 'Tay cầm Microsoft XBOX ONE S',
        brand: 'Microsoft',
        price: '1.600.000đ',
        oldPrice: '1.990.000đ',
        img: '/assest/img/tc3.jpg',
        category: 'ps',
        specs: {
            'Loại rung': 'Dual motor, Impulse Triggers',
            'Công nghệ Joystick': 'Analog truyền thống',
            'Công nghệ Trigger': 'Impulse Trigger',
            'Motion Control': 'Không',
            'Tính năng rung': 'Haptic Feedback, Rung phản hồi'
        }
    },
];