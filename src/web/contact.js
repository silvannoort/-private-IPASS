function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_fjf2j1d", "template_cghicba", {
        name: name,
        email: email,
        message: message,
    })
    .then(
        function (response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        },
        function (error) {
            alert("Failed to send message. Please try again later.");
        }
    );
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);
