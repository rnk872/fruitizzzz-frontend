const API = "https://fruitizzzz-backend.onrender.com/api/menu";

fetch(API)
  .then(res => res.json())
  .then(data => {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <small>${item.category}</small>
      `;

      menu.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("menu").innerHTML =
      "⚠️ Failed to load menu";
  });
