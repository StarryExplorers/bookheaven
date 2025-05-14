document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const signupForm = document.querySelector("#signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector("input[type='email']").value;
      const password = loginForm.querySelector("input[type='password']").value;

      if (email && password) {
        alert("Logging in... (This is just a demo!)");
        window.location.href = "index.html"; // redirect after login
      } else {
        alert("Please fill out all fields!");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = signupForm.querySelector("input[type='text']").value;
      const email = signupForm.querySelector("input[type='email']").value;
      const password = signupForm.querySelector("input[type='password']").value;

      if (username && email && password) {
        alert("Signing up... (This is just a demo!)");
        window.location.href = "index.html"; // redirect after signup
      } else {
        alert("Please complete all fields!");
      }
    });
  }

  const googleBtns = document.querySelectorAll(".google-btn");
  googleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Google login coming soon!");
    });
  });

  const emailBtns = document.querySelectorAll(".email-btn");
  emailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Magic link feature coming soon!");
    });
  });
});
