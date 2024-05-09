function login() {
    // Here you can implement login logic
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // For demonstration, let's check if both fields are filled
    if (username && password) {
        // Display welcome message
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("welcomeBackContainer").style.display = "block";
        document.getElementById("loggedInUser").innerText = username;
    } else {
        // Show error message or handle invalid login
        alert("Please enter both username and password.");
    }
}

function signup() {
    // Here you can implement signup logic
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // For demonstration, let's check if both fields are filled
    if (newUsername && newPassword) {
        // Display welcome message after signup
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("welcomeBackContainer").style.display = "block";
        document.getElementById("loggedInUser").innerText = newUsername;
    } else {
        // Show error message or handle invalid signup
        alert("Please enter both new username and password.");
    }
}

function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

