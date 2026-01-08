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
        </div>
      </section>

      <Cart items={cart} />
    </>
  );
}

  
        

