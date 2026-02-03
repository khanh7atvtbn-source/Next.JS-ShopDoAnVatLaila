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
              <a href="#">Giỏ hàng</a>
            </nav>
          </div>
        </header>

        {/* NỘI DUNG TRANG */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          © 2025 – Shop Đồ Ăn Vặt Laila
        </footer>
      </body>
    </html>
  );
}

