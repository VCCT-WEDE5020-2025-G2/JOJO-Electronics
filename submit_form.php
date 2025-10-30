<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    // Here you can add code to process the form data, such as sending an email or saving to a database

    file_put_contents('submissions.txt', "Name: $name\nEmail: $email\nNumber: $number\nMessage: $message\n\n", FILE_APPEND);

    echo "Thank you, $name! Your message has been received.";
} else {
    echo "Invalid request method.";
}
?>