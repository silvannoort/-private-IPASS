const adminUsername = "Bas";
const adminPassword = "123";

function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminUsername && password === adminPassword) {
        alert("Login successful!");
        // Redirect to the admin dashboard or any other protected page.
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.getElementById("admin-login-form").addEventListener("submit", login);
