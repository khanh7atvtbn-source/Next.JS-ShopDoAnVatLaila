let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Thêm vào giỏ
function addToCart(name, price) {
  const item = cart.find((p) => p.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  showToast();
}
function animateButton(btn) {
  btn.classList.add("bounce");
  setTimeout(() => btn.classList.remove("bounce"), 300);
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  loadCart();
}

// Hiện thông báo
function showToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

// Load giỏ hàng
function loadCart() {
  const list = document.getElementById("cartList");
  const totalPrice = document.getElementById("totalPrice");

  if (!list || !totalPrice) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    list.innerHTML += `
      <li>
        ${item.name} - ${item.price.toLocaleString()}đ × ${item.quantity}
      </li>
    `;
  });

  totalPrice.textContent = total.toLocaleString();
}

window.onload = loadCart;
