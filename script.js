// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("login-form");

//   loginForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     const username = document.getElementById("username-input").value;
//     const password = document.getElementById("password-input").value;

//     const adminUsername = "Gson";
//     const adminPassword = "iamtheadmin";

//     if (username === adminUsername && password === adminPassword) {
//       window.location.href = "dashboard.html";
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   });
// });

const loginForm = document.getElementById("login-form");

const adminUsername = "Group5";
const adminPassword = "iamtheadmin";

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  const getAdminName = document.getElementById("adminName");

  if (username === adminUsername && password === adminPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
