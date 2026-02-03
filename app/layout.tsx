import "./globals.css";

export const metadata = {
  title: "Shop Đồ Ăn Vặt Laila",
  description: "Shop đồ ăn vặt online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="/style.css" />
        <script src="/scripts.js" defer></script>
      </head>
      <body>
        <header className="main-header">
          <div className="header-container">
            <div className="logo">KTHShop</div>
            <nav className="nav-menu">
              <a href="/">Trang chủ</a>
              <a href="/products">Sản phẩm</a>
              <a href="/#contact">Liên hệ</a>
              <a href="#">Giỏ hàng</a>
            </nav>
          </div>
        </header>

        {children}

        <footer>© 2025 - Shop Đồ Ăn Vặt Laila</footer>
      </body>
    </html>
  );
}
