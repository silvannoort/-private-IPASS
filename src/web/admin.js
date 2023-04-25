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

    // Controleer of het nieuwe wachtwoord en het bevestigde wachtwoord overeenkomen
    if (newPassword !== confirmPassword) {
        alert("Nieuwe wachtwoorden komen niet overeen.");
        return;
    }

    // Controleer het oude wachtwoord en update het wachtwoord op de server
    // (Dit is een voorbeeld, u moet de verificatie en update van het wachtwoord afhandelen op basis van uw server en authenticatiesysteem)
    if (checkOldPassword(oldPassword)) {
        updatePassword(newPassword);
        alert("Wachtwoord is bijgewerkt.");
    } else {
        alert("Oud wachtwoord is onjuist.");
    }
});

function checkOldPassword(oldPassword) {
    // Implementeer de controle van het oude wachtwoord met uw server en authenticatiesysteem
    return true;
}

function updatePassword(newPassword) {
    // Implementeer de update van het wachtwoord met uw server en authenticatiesysteem
}


