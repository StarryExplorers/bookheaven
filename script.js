<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login – BookHeaven</title>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .login-box {
      background: white;
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      text-align: center;
      max-width: 400px;
      width: 100%;
    }

    h2 {
      color: #333;
      margin-bottom: 1rem;
    }

    #google-signin-button {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
    }

    .note {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: gray;
    }
  </style>
</head>
<body>
  <div class="login-box">
    <h2>Welcome to BookHeaven</h2>
    <div id="google-signin-button"></div>
    <p class="note">Sign in with your Google account to continue.</p>
  </div>

  <script>
    function handleCredentialResponse(response) {
      const responsePayload = decodeJwtResponse(response.credential);
      console.log("Logged in as: " + responsePayload.name);

      // Store the user's name or email if needed
      localStorage.setItem("userName", responsePayload.name);
      localStorage.setItem("userEmail", responsePayload.email);

      // Redirect after login
      window.location.href = "home.html";
    }

    function decodeJwtResponse(credential) {
      const base64Url = credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }

    google.accounts.id.initialize({
      client_id: "361831602073-jjr8g1u741gfihkp88rv2out8a37gka1.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      { theme: "outline", size: "large" }
    );
  </script>
</body>
</html>
