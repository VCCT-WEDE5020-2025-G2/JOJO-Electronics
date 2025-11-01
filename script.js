// Form validation script
document.getElementById("serviceForm").addEventListener("submit", function(event) {
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const number = document.getElementById("number").value.trim();
const service = document.getElementById("service").value;
const message = document.getElementById("formMessage");

message.style.color="red";
message.textContent="";

// Basic validation
if (!name || !email || !number || !service) {
    alert("Please fill in all required fields.");
    event.preventDefault();
} else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    event.preventDefault();
} else if (isNaN(number) || number.length < 10) {
    alert("Please enter a valid contact number.");
    event.preventDefault();
} else {
    message.style.color="green";
    message.textContent= "Thank you for your enquiry! We will get back to you soon.";
    event.preventDefault();
    return;
}
// if validation fails, prevent form submission but if it passes, allow submission
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


// Lightbox functionality

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closebtn = document.getElementsByClassName("close")[0];

if (lightbox && lightboxImg && captionText && closebtn) {
    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closebtn.addEventListener= ("click",() => {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// Contact form validation

document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const formMessage = document.getElementById("formMessage");
    formMessage.style.color="red";
    formMessage.textContent="";
    // Basic validation

    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
    else {
        formMessage.style.color="green";
        formMessage.textContent= "Thank you for your message! We will get back to you soon.";
        event.preventDefault();
        return;
    }
});


