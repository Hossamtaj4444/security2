window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}




const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
});
function hundleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active")
}
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const body = document.body;
    
    // التبديل بين الوضعين
    if (body.classList.contains('dark-mode')) {
        // إلغاء الوضع الليلي
        body.classList.remove('dark-mode');
        this.innerHTML = '<i class="fas fa-moon"></i>   '; // تغيير الأيقونة إلى القمر
        localStorage.setItem('dark-mode', 'disabled'); // حفظ الوضع الحالي في التخزين المحلي
    } else {
        // تفعيل الوضع الليلي
        body.classList.add('dark-mode');
        this.innerHTML = '<i class="fas fa-sun"></i>   '; // تغيير الأيقونة إلى الشمس
        localStorage.setItem('dark-mode', 'enabled'); // حفظ الوضع الحالي في التخزين المحلي
    }
});

// عند تحميل الصفحة، تحقق من الوضع المحفوظ في التخزين المحلي واستعده
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggle-dark-mode').innerHTML = '<i class="fas fa-sun"></i>   ';
} else {
    document.getElementById('toggle-dark-mode').innerHTML = '<i class="fas fa-moon"></i>   ';
}

    // تعيين مسارات الفيديوهات المحلية
    var videos = {
        video1: 'videos/video1.mp4', // مسار الفيديو المحلي الأول
        video2: 'videos/video2.mp4', // مسار الفيديو المحلي الثاني
        video3: 'videos/video3.mp4', // مسار الفيديو المحلي الثالث
        video4: 'videos/video4.mp4', // مسار الفيديو المحلي الرابع
        video5: 'videos/video5.mp4',
        video6: 'videos/video6.mp4',
        video7: 'videos/video7.mp4'
    };
    
    // دالة لتشغيل الفيديو عند الضغط على زر "ابدأ"
    function playVideo(videoId) {
        var videoSource = document.getElementById('videoSource');
        videoSource.src = videos[videoId]; // تعيين مصدر الفيديو
        var videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.load(); // إعادة تحميل الفيديو
        videoPlayer.play(); // تشغيل الفيديو مباشرةً
    }