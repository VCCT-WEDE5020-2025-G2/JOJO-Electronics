document.getElementById("serviceForm").addEventListener = ("submit", function(event) {
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const number = document.getElementById("number").value.trim();
const service = document.getElementById("service").value;
const message = document.getElementById("formMessage");

message.style.color="red";
message.textContent="";


if (!name || !email || !number || !service) {
    alert("Please fill in all required fields.");
    event.preventDefault();
} else if (!email.includes("@") || email.includes(".")) {
    alert("Please enter a valid email address.");
    event.preventDefault();
} else if (isNaN(number) || number.length < 10) {
    alert("Please enter a valid contact number.");
    event.preventDefault();
} else {
    message.style.color="green";
    message.textContent= "Thank you for your enquiry! We will get back to you soon.";
    event.preventDefault();
}
});