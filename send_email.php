<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/Users/rohithreddykothakapu/PycharmProjects/flask/PHPMailer/src/Exception.php';
require '/Users/rohithreddykothakapu/PycharmProjects/flask/PHPMailer/src/PHPMailer.php';
require '/Users/rohithreddykothakapu/PycharmProjects/flask/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace with your email address
    $to = "rohithreddyca2@gmail.com";
    $subject = "New Contact Form Submission";

    $mail = new PHPMailer(true);

    $mail->SMTPDebug = 2; // Enable verbose debug output

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Set your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'rohithreddyca2@gmail.com'; // SMTP username
        $mail->Password   = 'zeyadyjpmxudfbxe'; // SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, 'ssl' also accepted
        $mail->Port       = 587; // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress($to);

        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "Name: $name<br>Email: $email<br>Message:<br>$message";

        $mail->send();
        echo "Thank you for your message! We'll get back to you soon.";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Access Forbidden";
}
?>

