// Switch between Login and Register forms
function switchToRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

function switchToLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Simulate login (add real login logic with backend in production)
  if (email && password) {
    alert(`Logged in as ${email}`);
    // After successful login, show profile section
    showProfile(email);
  } else {
    alert('Please enter both email and password.');
  }
});

// Handle Register Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;
  
  if (password === confirmPassword && email) {
    alert(`Account created for ${email}`);
    // After successful registration, show profile section
    showProfile(email);
  } else {
    alert('Passwords do not match or invalid input.');
  }
});

// Show User Profile Section
function showProfile(email) {
  // Hide Login and Register Forms
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'none';
  
  // Display User Profile with their email
  document.getElementById('user-email').textContent = email;
  document.getElementById('profile-container').style.display = 'block';
  document.getElementById('google-signin-btn').style.display = 'none'; // Hide Google button after login
}

// Handle Google Sign-In
document.getElementById('google-signin-btn').addEventListener('click', function() {
  // Simulate Google Sign-In (replace with actual API in production)
  const googleUser = {
    email: 'googleuser@example.com'
  };
  alert(`Signed in with Google as ${googleUser.email}`);
  // Show Profile Section after Google Sign-In
  showProfile(googleUser.email);
});

// Handle Logout
function logout() {
  // Hide Profile Section and show Login Form
  document.getElementById('profile-container').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('google-signin-btn').style.display = 'block'; // Show Google button again
  alert('You have been logged out.');
  }
