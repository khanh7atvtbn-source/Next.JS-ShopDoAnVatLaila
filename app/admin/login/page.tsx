"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (user === "admin" && pass === "123") {
      localStorage.setItem("admin", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <main>
      <h1>Đăng nhập quản trị</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Đăng nhập</button>
    </main>
  );
}
