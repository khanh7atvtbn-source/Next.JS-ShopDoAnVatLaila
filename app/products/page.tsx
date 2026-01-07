"use client";

export default function ProductsPage() {
  return (
    <>
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

      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" />
          <h1 className="title-border">🍟 Danh sách sản phẩm</h1>
          <a href="/">⬅ Quay về trang chủ</a>
        </div>
      </section>

      <section className="product-list">
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
            <button>Thêm vào giỏ</button>
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

      <section className="cart">
        <h2>🛒 Giỏ hàng</h2>
        <ul id="cartList"></ul>
        <p>
          Tổng: <span id="totalPrice">0</span> đ
        </p>
        <button>Xoá giỏ hàng</button>
      </section>

      <div id="toast" className="toast">
        ✔ Đã thêm vào giỏ hàng
      </div>

      <footer>© 2025 - Shop Đồ Ăn Vặt Laila</footer>

      <script src="/script.js"></script>
    </>
  );
}

