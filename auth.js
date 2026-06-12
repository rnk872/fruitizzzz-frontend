const API = "https://fruitizzzz-backend.onrender.com";

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

function protectPage() {
  if (!localStorage.getItem("token")) {
    window.location.href = "login.html";
  }
}
