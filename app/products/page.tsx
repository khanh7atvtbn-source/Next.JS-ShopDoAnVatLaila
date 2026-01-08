export const metadata = {
  title: "Sản phẩm | Shop Đồ Ăn Vặt Laila",
};

const products = [
  { name: "Khoai tây chiên", price: 20000, image: "/images/Khoai.jpg" },
  { name: "Gà rán", price: 30000, image: "/images/garan.jpg" },
  { name: "Bánh tráng trộn", price: 15000, image: "/images/banhtrangtron.jpg" },
  { name: "Nem chua rán", price: 22000, image: "/images/nemchuaran.jpg" },
  { name: "Xiên que tổng hợp", price: 28000, image: "/images/xienque.jpg" },
  { name: "Bim Bim", price: 6000, image: "/images/bimbim.jpg" },
  { name: "Xoài lắc", price: 10000, image: "/images/xoailac.jpg" },
  { name: "Lạp xưởng nướng đá", price: 15000, image: "/images/lapxuong.jpg" },
  { name: "Xúc xích chiên", price: 10000, image: "/images/xucxichchien.jpg" },
  { name: "[500g] Khô gà lá chanh", price: 90000, image: "/images/khogalachanh.jpg" },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🍟 Danh sách sản phẩm</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {products.map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
            <h3>{p.name}</h3>
            <p>{p.price.toLocaleString()}đ</p>
            <button>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
}

