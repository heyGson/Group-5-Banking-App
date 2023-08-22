const loginForm = document.getElementById("login-form");

// Global variables
const adminUsername = "Group5";
const adminPassword = "iamtheadmin";
const getAdminName = document.getElementById("adminName");

// Account 1 variables
let accountOneBalance = 8700;
const accountOneNumber = "00014448332";

// Account 2 variables
let accountTwoBalance = 958;
const accountTwoNumber = "00023578992";

getAdminName.textContent = adminUsername;

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  if (username === adminUsername && password === adminPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
