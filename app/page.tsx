export default function Page() {
  return (
    <>
      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" alt="Banner" />
          <a href="/products" className="cta-button">
            MUA NGAY
          </a>
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Đồ ăn vặt bán chạy nhất</h2>
        <div className="product-container">
          {/* product-card giữ nguyên */}
        </div>
      </section>
    </>
  );
}
