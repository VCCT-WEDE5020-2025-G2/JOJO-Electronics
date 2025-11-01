<?php
// submit_form.php for serving form submissions
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
   
    file_put_contents('submissions.txt', "Name: $name\nEmail: $email\nNumber: $number\n\n", FILE_APPEND);

    echo "Thank you, $name! Your message has been received.";
} else {
    echo "Invalid request method.";
}

// submit_form.php for enquiry form
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];
    $message = $_POST['message'];
   
    file_put_contents('enquiries.txt', "Email: $email\nMessage: $message\n\n", FILE_APPEND);

    echo "Thank you! Your enquiry has been received.";
} else {
    echo "Invalid request method.";
}

// submit_form.php for contact form
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
   
    file_put_contents('contacts.txt', "Name: $name\nEmail: $email\nMessage: $message\n\n", FILE_APPEND);

    echo "Thank you, $name! Your contact message has been received.";
} else {
    echo "Invalid request method.";
}
?>