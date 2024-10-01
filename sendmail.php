<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على بيانات النموذج
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // عنوان البريد الذي سيتم الإرسال إليه
    $to = "dataweb26@gmail.com";  // استبدل هذا ببريدك الإلكتروني

    // عنوان البريد الإلكتروني
    $subject = "رسالة من: $name";

    // نص الرسالة
    $body = "اسم المرسل: $name\n";
    $body .= "بريد المرسل: $email\n";
    $body .= "الرسالة:\n$message";

    // رؤوس البريد
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // محاولة إرسال الرسالة
    if (mail($to, $subject, $body, $headers)) {
        echo "تم إرسال رسالتك بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال رسالتك. حاول مرة أخرى لاحقًا.";
    }
} else {
    echo "طريقة غير مسموح بها.";
}
?>