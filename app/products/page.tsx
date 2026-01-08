"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.name === name);
      if (exist) {
        return prev.map((i) =>
          i.name === name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <>
      <Header />

      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <img src="/images/psd.jpg" alt="Banner" />
          <h1 className="title-border">🍟 Danh sách sản phẩm</h1>
          <a href="/">⬅ Quay về trang chủ</a>
        </div>
      </section>

      {/* Products */}
      <section className="product-list">
        <div className="product-container">
          <ProductCard name="Khoai tây chiên" price={20000} image="/images/khoai.jpg" onAdd={() => addToCart("Khoai tây chiên", 20000)} />
          <ProductCard name="Gà rán" price={30000} image="/images/garan.jpg" onAdd={() => addToCart("Gà rán", 30000)} />
          <ProductCard name="Bánh tráng trộn" price={15000} image="/images/banhtrangtron.jpg" onAdd={() => addToCart("Bánh tráng trộn", 15000)} />
          <ProductCard name="Nem chua rán" price={22000} image="/images/nemchuaran.jpg" onAdd={() => addToCart("Nem chua rán", 22000)} />
          <ProductCard name="Xiên que tổng hợp" price={28000} image="/images/xienque.jpg" onAdd={() => addToCart("Xiên que tổng hợp", 28000)} />
          <ProductCard name="Bim Bim" price={6000} image="/images/bimbim.jpg" onAdd={() => addToCart("Bim Bim", 6000)} />
          <ProductCard name="Xoài lắc" price={10000} image="/images/xoailac.jpg" onAdd={() => addToCart("Xoài lắc", 10000)} />
          <ProductCard name="Lạp xưởng nướng đá" price={15000} image="/images/lapxuong.jpg" onAdd={() => addToCart("Lạp xưởng nướng đá", 15000)} />
          <ProductCard name="Xúc xích chiên" price={10000} image="/images/xucxichchien.jpg" onAdd={() => addToCart("Xúc xích chiên", 10000)} />
          <ProductCard name="Khô gà lá chanh" price={90000} image="/images/khogalachanh.jpg" onAdd={() => addToCart("Khô gà lá chanh", 90000)} />
        </div>
      </section>

      {/* Cart */}
      <section className="cart">
        <h2>🛒 Giỏ hàng</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.name}>
              {item.name} × {item.quantity} —{" "}
              {(item.price * item.quantity).toLocaleString()}đ
            </li>
          ))}
        </ul>
        <p>Tổng: <b>{total.toLocaleString()}đ</b></p>
        <button onClick={clearCart}>Xoá giỏ hàng</button>
      </section>

      {showToast && (
        <div className="toast show">✔ Đã thêm vào giỏ hàng</div>
      )}

      <footer>© 2025 - Shop Đồ Ăn Vặt Laila</footer>
    </>
  );
}

   

  
        

