import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {/* HEADER */}
        <header className="main-header">
          <div className="header-container">
            <div className="logo">KTHShop</div>
            <nav className="nav-menu">
              <a href="/">Trang chủ</a>
              <a href="/products">Sản phẩm</a>
              <a href="#contact">Liên hệ</a>
              <a href="#">Giỏ hàng</a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© 2025 - Shop Đồ Ăn Vặt Laila</p>
          <p>📞 0919 149 361 | 📧 kthshop@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}

