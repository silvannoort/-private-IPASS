const adminUsername = "Bas";
const adminPassword = "123";

function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminUsername && password === adminPassword) {
        alert("Login successful!");
        
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.getElementById("admin-login-form").addEventListener("submit", login);

document.getElementById("change-password-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-new-password").value;

    if (newPassword !== confirmPassword) {
        alert("Nieuwe wachtwoorden komen niet overeen.");
        return;
    }


    if (checkOldPassword(oldPassword)) {
        updatePassword(newPassword);
        alert("Wachtwoord is bijgewerkt.");
    } else {
        alert("Oud wachtwoord is onjuist.");
    }
});

function checkOldPassword(oldPassword) {
    
    return true;
}

function updatePassword(newPassword) {
   
}


