import "./globals.css";
import Script from "next/script";

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

        {/* LOAD SCRIPT SAU KHI TRANG RENDER */}
        <Script src="/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
