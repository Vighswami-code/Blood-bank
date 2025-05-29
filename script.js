// Fake users database with roles
const users = [
  { username: "admin", password: "admin", role: "admin" },
  { username: "reception", password: "12345", role: "receptionist" }
];

function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("userName", user.username);

    // Redirect based on role
    if (user.role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else if (user.role === "receptionist") {
      window.location.href = "reception-dashboard.html";
    }
  } else {
    document.getElementById("error").innerText = "Invalid username or password";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function checkAuth(requiredRole) {
  const loggedIn = localStorage.getItem("loggedIn");
  const role = localStorage.getItem("userRole");

  if (!loggedIn || (requiredRole && role !== requiredRole)) {
    window.location.href = "login.html";
  }
}
