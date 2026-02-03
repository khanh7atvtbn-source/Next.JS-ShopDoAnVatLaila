"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (name: string, price: number) => {
    setCart([...cart, { name, price }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const products = [
    { name: "Khoai tây chiên", price: 20000, img: "/images/Khoai.jpg" },
    { name: "Gà rán", price: 30000, img: "/images/garan.jpg" },
    { name: "Bánh tráng trộn", price: 15000, img: "/images/banhtrangtron.jpg" },
    { name: "Nem chua rán", price: 22000, img: "/images/nemchuaran.jpg" },
    { name: "Xiên que tổng hợp", price: 28000, img: "/images/xienque.jpg" },
    { name: "Bim Bim", price: 6000, img: "/images/bimbim.jpg" },
    { name: "Xoài lắc", price: 10000, img: "/images/xoailac.jpg" },
    { name: "Lạp xưởng nướng đá", price: 15000, img: "/images/lapxuong.jpg" },
    { name: "Xúc xích chiên", price: 10000, img: "/images/xucxichchien.jpg" },
    { name: "[500gram] Khô gà lá chanh", price: 90000, img: "/images/khogalachanh.jpg" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">KTHShop</div>
          <nav className="nav-menu">
            <Link href="/">Trang chủ</Link>
            <Link href="/products">Sản phẩm</Link>
            <Link href="#">Giỏ hàng</Link>
          </nav>
        </div>
      </header>

      {/* BANNER */}
      <section className="banner">
        <div className="banner-content">
          <Image
            src="/images/psd.jpg"
            alt="Banner"
            width={1200}
            height={400}
            priority
          />
          <h1 className="title-border">🍟 Danh sách sản phẩm</h1>
          <Link href="/">⬅ Quay về trang chủ</Link>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="product-list">
        <div className="product-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <Image
                src={product.img}
                alt={product.name}
                width={220}
                height={180}
              />
              <h3>{product.name}</h3>
              <p className="price">{product.price.toLocaleString()}đ</p>
              <button onClick={() => addToCart(product.name, product.price)}>
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CART */}
      <section className="cart">
        <h2>🛒 Giỏ hàng</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} – {item.price.toLocaleString()}đ
            </li>
          ))}
        </ul>
        <p>
          Tổng: <strong>{totalPrice.toLocaleString()} đ</strong>
        </p>
        <button onClick={clearCart}>Xoá giỏ hàng</button>
      </section>

      {/* FOOTER */}
      <footer>© 2025 - Shop Đồ Ăn Vặt Laila</footer>
    </>
  );
}

        

