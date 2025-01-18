<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST['email']);

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $filePath = 'emails.txt';

        // Append the email to the file
        $emailEntry = $email . PHP_EOL;
        if (file_put_contents($filePath, $emailEntry, FILE_APPEND | LOCK_EX)) {
            echo "Subscription successful! Thank you for subscribing.";
        } else {
            echo "Error saving email. Please try again.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
