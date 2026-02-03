"use client";

export default function ProductsPage() {
  return (
    <main>
      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" alt="Banner" />
          <h1 className="title-border">🍟 Danh sách sản phẩm</h1>
          <a href="/">⬅ Quay về trang chủ</a>
        </div>
      </section>

      <section className="product-list">
        <div className="product-container">
          {[
            { name: "Khoai tây chiên", price: 20000, img: "khoai.jpg" },
            { name: "Gà rán", price: 30000, img: "garan.jpg" },
            { name: "Bánh tráng trộn", price: 15000, img: "banhtrangtron.jpg" },
            { name: "Nem chua rán", price: 22000, img: "nemchuaran.jpg" },
            { name: "Xiên que tổng hợp", price: 28000, img: "xienque.jpg" },
            { name: "Bim Bim", price: 6000, img: "bimbim.jpg" },
            { name: "Xoài lắc", price: 10000, img: "xoailac.jpg" },
            { name: "Lạp xưởng nướng đá", price: 15000, img: "lapxuong.jpg" },
            { name: "Xúc xích chiên", price: 10000, img: "xucxichchien.jpg" },
            { name: "Khô gà lá chanh (500g)", price: 90000, img: "khogalachanh.jpg" },
          ].map((p, index) => (
            <div className="product-card" key={index}>
              <img src={`/images/${p.img}`} />
              <h3>{p.name}</h3>
              <p className="price">{p.price.toLocaleString()}đ</p>

              <button
                onClick={() => {
                  // @ts-ignore
                  window.addToCart(p.name, p.price);
                }}
              >
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>🛒 Giỏ hàng</h2>
        <ul id="cartList"></ul>
        <p>
          Tổng: <span id="totalPrice">0</span> đ
        </p>

        <button
          onClick={() => {
            // @ts-ignore
            window.clearCart();
          }}
        >
          Xoá giỏ hàng
        </button>
      </section>

      <div id="toast" className="toast">✔ Đã thêm vào giỏ hàng</div>
    </main>
  );
}
