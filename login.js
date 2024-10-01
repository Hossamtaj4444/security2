function handleCredentialResponse(response) {
    const credential = response.credential;
    // هنا يمكنك إرسال بيانات الاعتماد إلى الخادم للتحقق من المستخدم
    console.log("Encoded JWT ID token: " + credential);
}

// قم بتحميل مكتبة Google
function initGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // استبدل هذا بـ Client ID الخاص بك
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector('.btn-google'),
        { theme: 'outline', size: 'large' } // يمكنك تغيير الخصائص هنا
    );
    
    google.accounts.id.prompt(); // يظهر نافذة تسجيل الدخول إذا كان المستخدم غير مسجل الدخول
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = function () {
    initGoogleSignIn();
};