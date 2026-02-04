"use client";

export default function AdminLogin() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Admin Login</h1>

      <input placeholder="Username" />
      <br /><br />
      <input type="password" placeholder="Password" />
      <br /><br />

      <button
        onClick={() => {
          alert("Đăng nhập admin thành công");
          window.location.href = "/admin/dashboard";
        }}
      >
        Đăng nhập
      </button>
    </main>
  );
}
