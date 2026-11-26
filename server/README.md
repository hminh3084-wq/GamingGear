# Hướng dẫn chạy Backend

## 1. Cài packages (chạy 1 lần)

Mở PowerShell/cmd, cd vào thư mục server:

```
cd d:\NhapMonWeb\project\server
npm install
```

## 2. Cấu hình database

Mở file `db.js`, sửa tên database cho đúng:

```js
database: 'LuisGafDB',   // ← đổi thành tên database thực tế của bạn
```

Nếu dùng SQL Server Express (tên instance là SQLEXPRESS), bỏ comment dòng:
```js
instanceName: 'SQLEXPRESS',
```

## 3. Chạy server

```
npm start
```

Hoặc dùng nodemon để tự restart khi sửa code:
```
npm run dev
```

Server chạy tại: http://localhost:3000

## 4. Test API

Mở trình duyệt vào:
- http://localhost:3000/api/products
- http://localhost:3000/api/products?category=laptop
- http://localhost:3000/api/products/1

## Cấu trúc thư mục

```
server/
├── server.js          ← Entry point
├── db.js              ← Kết nối SQL Server
├── package.json
└── routes/
    ├── products.js    ← GET /api/products, /api/products/:id
    └── orders.js      ← POST /api/orders, GET /api/orders/:code
```
