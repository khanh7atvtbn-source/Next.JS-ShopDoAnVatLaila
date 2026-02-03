export default function Page() {
  return (
    <>
      {/* BANNER */}
      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" alt="Banner" />
          <a href="/products" className="cta-button">
            MUA NGAY
          </a>
        </div>
      </section>
      
      {/* SẢN PHẨM NỔI BẬT */}
      <section className="product-section">
        <h2 className="section-title">Đồ ăn vặt bán chạy nhất</h2>
        <div className="product-container">
          <div className="product-card">
            <img src="/images/khoai.jpg" />
            <h3>Khoai tây chiên</h3>
            <p className="price">20.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="/images/garan.jpg" />
            <h3>Gà rán</h3>
            <p className="price">30.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/banhtrangtron.jpg" />
            <h3>Bánh tráng trộn</h3>
            <p className="price">15.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/nemchuaran.jpg" />
            <h3>Nem chua rán</h3>
            <p className="price">22.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/xienque.jpg" />
            <h3>Xiên que tổng hợp</h3>
            <p className="price">28.000đ</p>
            <button> Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/bimbim.jpg" />
            <h3>Bim Bim</h3>
            <p className="price">6.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/xoailac.jpg" />
            <h3>Xoài lắc</h3>
            <p className="price">10.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/lapxuong.jpg" />
            <h3>Lạp xưởng nướng đá</h3>
            <p className="price">15.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/xucxichchien.jpg" />
            <h3>Xúc xích chiên</h3>
            <p className="price">10.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img src="images/khogalachanh.jpg" />
            <h3>[500gram]Khô gà lá chanh</h3>
            <p className="price">90.000đ</p>
            <button>Thêm vào giỏ</button>
          </div>
        </div>
      </section>

    
    </>
  );
}
