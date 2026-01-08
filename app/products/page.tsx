export default function ProductsPage() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (name: string, price: number) => {
    setCart([...cart, { name, price }]);
  };

  return (
    <>
      <Header />

      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" />
          <h1 className="title-border">🍟 Danh sách sản phẩm</h1>
          <a href="/">⬅ Quay về trang chủ</a>
        </div>
      </section>

      {/* Product list */}
      <section className="product-list">
        <div className="product-container">
          <ProductCard
            name="Khoai tây chiên"
            price={20000}
            image="/images/Khoai.jpg"
            onAdd={() => addToCart("Khoai tây chiên", 20000)}
          />

          <ProductCard
            name="Gà rán"
            price={30000}
            image="/images/garan.jpg"
            onAdd={() => addToCart("Gà rán", 30000)}
          />

          <ProductCard
            name="Bánh tráng trộn"
            price={15000}
            image="/images/banhtrangtron.jpg"
            onAdd={() => addToCart("Bánh tráng trộn", 15000)}
          />

          <ProductCard
            name="Nem chua rán"
            price={22000}
            image="/images/nemchuaran.jpg"
            onAdd={() => addToCart("Nem chua rán", 22000)}
          />

          <ProductCard
            name="Xiên que tổng hợp"
            price={22000}
            image="/images/xienque.jpg"
            onAdd={() => addToCart("Bánh tráng trộn", 22000)}
          />
          
          <ProductCard
            name="Bim Bim"
            price={6000}
            image="/images/banhtrangtron.jpg"
            onAdd={() => addToCart("Bánh tráng trộn", 6000)}
          />

          <ProductCard
            name="Xoài lắc"
            price={10000}
            image="/images/xoailac.jpg"
            onAdd={() => addToCart("Xoài lắc", 10000)}
          />

          <ProductCard
            name="Lạp xưởng nướng đá"
            price={15000}
            image="/images/lapxuong.jpg"
            onAdd={() => addToCart("Lạp xưởng nướng đá", 15000)}
          />

          <ProductCard
            name="Xúc xích chiên"
            price={10000}
            image="/images/xucxichchien.jpg"
            onAdd={() => addToCart("Xúc xích chiên", 10000)}
          />

          <ProductCard
            name="[500gram]Khô gà lá chanh"
            price={90000}
            image="/images/khogalachanh.jpg"
            onAdd={() => addToCart("[500gram]Khô gà lá chanh", 90000)}
          />
        </div>
        <section className="cart">
        <h2>🛒 Giỏ hàng</h2>
        <ul id="cartList"></ul>
        <p>Tổng: <span id="totalPrice">0</span> đ</p>
        <button onClick={() => window.clearCart()}>
          Xoá giỏ hàng
        </button>
      </section>

      <div id="toast" className="toast">✔ Đã thêm vào giỏ hàng</div>

      <footer>© 2025 - Shop Đồ Ăn Vặt Laila</footer>

      <script src="/script.js"></script>
    </>
  );
}
</section>
</>
);
}

  
        

