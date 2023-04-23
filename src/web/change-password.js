function changePassword(e) {
    e.preventDefault();

    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const storedPassword = localStorage.getItem("adminPassword");

    if (currentPassword !== storedPassword) {
        alert("Incorrect current password.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirmation password do not match.");
        return;
    }

    localStorage.setItem("adminPassword", newPassword);
    alert("Password changed successfully!");

    // Redirect to the admin dashboard or any other protected page.
    window.location.href = "dashboard.html";
}

document.getElementById("change-password-form").addEventListener("submit", changePassword);
