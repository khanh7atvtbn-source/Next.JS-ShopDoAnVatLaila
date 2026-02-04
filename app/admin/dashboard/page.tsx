"use client";

import { useState, useEffect } from "react";
import AdminGuard from "@/components/AdminGuard";

type Product = {
  name: string;
  price: number;
  image: string;
};

export default function AdminDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) setProducts(JSON.parse(data));
  }, []);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const addProduct = () => {
    const newProduct = { name, price, image };
    const newList = [...products, newProduct];
    setProducts(newList);
    localStorage.setItem("products", JSON.stringify(newList));
  };

  return (
    <AdminGuard>
      <main style={{ padding: 20 }}>
        <h1>Quản lý nội dung</h1>

        <input
          placeholder="Tên sản phẩm"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Giá"
          onChange={(e) => setPrice(+e.target.value)}
        />
        <br />
        <br />

        <input type="file" accept="image/*" onChange={handleImage} />
        <br />
        <br />

        {image && <img src={image} width={150} />}
        <br />
        <br />

        <button onClick={addProduct}>Thêm sản phẩm</button>

        <h2>Danh sách</h2>
        <ul>
          {products.map((p, i) => (
            <li key={i}>
              {p.name} - {p.price}đ
            </li>
          ))}
        </ul>
      </main>
    </AdminGuard>
  );
}
