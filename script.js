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

        fetch(form.action, {
            method: form.method,
            body: formData,
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

// Contact form email composition and sending

(function() {
    const RECIPIENT_EMAIL = "JOJOElectronics@gmail.com";

    const form = document.getElementById("contactForm");
    const status = document.getElementById("formMessage");

    function enc(s) {
        return encodeURIComponent(s);
    }

    function composeMailto(to , subject, body) {
        return `mailto:${enc(to)}?subject=${enc(subject)}&body=${enc(body)}`;
    }

    function composeGmail(to, subject, body) {
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`;
    }

    function composeOutlook(to, subject, body) {
        return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();
        const sendMethod = document.querySelector('input[name="sendMethod"]:checked').value;

    const subject = 'Website Contact Form Submission ${name || "No Name"}';
    const body =[
        'Hello,',
        '',
        'You have received a new message from your website contact form.',
        message,'',
        '',
        'Sender:${name}',
        'Email:${email}',
        'Sent from JOJO Electronics website contact form.'
    ].join('\n');
    
    let url = '';
    if (sendMethod === 'gmail') {
        url = composeGmail(RECIPIENT_EMAIL, subject, body);
        window.open(url, '_blank','noreferrer');
    } else if (sendMethod === 'outlook') {
        url = composeOutlook(RECIPIENT_EMAIL, subject, body);
        window.open(url, '_blank','noreferrer');
    } else {
        url = composeMailto(RECIPIENT_EMAIL, subject, body);
        window.location .href = url;
    }

    status.style.color = "green";
    status.textContent = "Preparing your email client...";
    form.reset();
    });
})();


