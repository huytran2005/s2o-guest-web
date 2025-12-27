let qty = 1;

const qtyEl = document.getElementById("qty");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

/* ===== QUANTITY ===== */
plus.onclick = () => {
  qty++;
  qtyEl.innerText = qty;
};

minus.onclick = () => {
  if (qty > 1) {
    qty--;
    qtyEl.innerText = qty;
  }
};

window.addToCart = function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = {
    id: "goitom",
    name: "Gỏi tôm",
    price: 50,
    image: "/public/images/goitom.png",
    qty: qty
  };

  const existing = cart.find(i => i.id === item.id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // ✅ FLAG để menu biết phải mở cart
  localStorage.setItem("openCartAfterAdd", "true");

  // ✅ quay về menu
  window.location.href = "menu.html";
};
