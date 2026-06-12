const API = "https://fruitizzzz-backend.onrender.com";

/* Save token */
function saveToken(token) {
  localStorage.setItem("token", token);
}

/* Get token */
function getToken() {
  return localStorage.getItem("token");
}

/* Logout */
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

/* Check login */
function isLoggedIn() {
  return !!localStorage.getItem("token");
}

/* Protect page */
function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = "login.html";
  }
}
