const API = "https://fruitizzzz-backend.onrender.com/api/menu";

let cart = [];
let menuData = [];

/* ======================
   LOAD MENU FROM BACKEND
====================== */
fetch(API)
  .then(res => res.json())
  .then(data => {
    menuData = data; // store globally

    const menu = document.getElementById("menu");
    menu.innerHTML = "";

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCartHandler('${item._id}')">
          Add to Cart
        </button>
      `;

      menu.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("menu").innerHTML =
      "Failed to load menu ❌";
    console.log(err);
  });

/* ======================
   ADD TO CART (SAFE)
====================== */
function addToCartHandler(id) {
  const item = menuData.find(m => m._id === id);

  if (!item) {
    console.log("Item not found");
    return;
  }

  cart.push(item);
  updateCart();
}

/* ======================
   UPDATE CART UI
====================== */
function updateCart() {
  const cartBox = document.getElementById("cart");

  if (!cartBox) return;

  cartBox.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartBox.appendChild(div);
  });

  const totalDiv = document.createElement("h3");
  totalDiv.innerText = "Total: ₹" + total;

  cartBox.appendChild(totalDiv);
}

/* ======================
   REMOVE FROM CART
====================== */
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}


