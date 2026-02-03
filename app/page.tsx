export default function HomePage() {
  return (
    <main>
      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" alt="Banner" />

          <h1 className="title-border">🍟 Shop Đồ Ăn Vặt Laila</h1>

          <div className="banner-buttons">
            <a href="/products" className="cta-button">
              MUA NGAY
            </a>

            <a href="/products" className="secondary-button">
              Xem sản phẩm
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
