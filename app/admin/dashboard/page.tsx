"use client";

export default function AdminDashboard() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Trang quản trị</h1>

      <p>Upload hình ảnh sản phẩm</p>

      <input type="file" />
      <br /><br />

      <button onClick={() => alert("Upload thành công")}>
        Upload
      </button>
    </main>
  );
}
