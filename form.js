document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("serviceForm");
    const message = document.querySelectorAll("formmessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("submit_form.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            message.textContent = "Form submitted successfully!";
            message
            form.reset();
        })

        .catch(error => {
            message.textContent = "An error occurred while submitting the form.";
            console.error("Error:", error);
        });
    });
});