const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const user = {
      email: email,
      password: password
    };

    localStorage.setItem("smarttaskUser", JSON.stringify(user));

    alert("Account created successfully!");

    window.location.href = "log.html";
  });
}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("smarttaskUser"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");

      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect email or password");
    }
  });
}