const cart = document.getElementById("cart");
const overlay = document.getElementById("cartOverlay");
const cartEmpty = document.getElementById("cartEmpty");
const cartContent = document.getElementById("cartContent");
const cartItemsEl = document.getElementById("cartItems");
const subTotalEl = document.getElementById("subTotal");
const totalEl = document.getElementById("total");

let items = [];

/* OPEN / CLOSE */
function openCart() {
  cart.classList.add("show");
  overlay.style.display = "flex";
  renderCart();
}

function closeCart() {
  cart.classList.remove("show");
  overlay.style.display = "none";
}

overlay.addEventListener("click", closeCart);
cart.addEventListener("click", e => e.stopPropagation());

/* ADD ITEM */
function addToCart(product) {
  const found = items.find(i => i.id === product.id);
  if (found) {
    found.qty++;
  } else {
    items.push({ ...product, qty: 1 });
  }
  openCart();
}

/* RENDER CART */
function renderCart() {
  if (items.length === 0) {
    cartEmpty.style.display = "flex";
    cartContent.style.display = "none";
    subTotalEl.innerText = "$0.00";
    totalEl.innerText = "$0.00";
    return;
  }

  cartEmpty.style.display = "none";
  cartContent.style.display = "block";

  cartItemsEl.innerHTML = "";
  let subTotal = 0;

  items.forEach(item => {
    subTotal += item.price * item.qty;

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>

          <div class="cart-item-actions">
            <button onclick="changeQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  });

  subTotalEl.innerText = `$${subTotal.toFixed(2)}`;
  totalEl.innerText = `$${(subTotal + 8).toFixed(2)}`;
}

/* CHANGE QTY */
function changeQty(id, delta) {
  const item = items.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    items = items.filter(i => i.id !== id);
  }

  renderCart();
}
