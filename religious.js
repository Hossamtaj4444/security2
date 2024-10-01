// نافذة تحميل المنشورات
var modal = document.getElementById("postModal");
var uploadBtn = document.getElementById("uploadButton");
var cancelButton = document.getElementById("cancelButton"); // زر إلغاء

// عند الضغط على زر القلم لفتح النافذة
uploadBtn.onclick = function() {
    modal.style.display = "block";
};

// عند الضغط على زر إلغاء الخروج من النافذة
cancelButton.onclick = function() {
    modal.style.display = "none";
};

// إغلاق النافذة عند الضغط خارجها غير مفعل
modal.onclick = function(event) {
    if (event.target === modal) {
        return;
    }
};

// الإعجاب
var likeBtn = document.getElementById("likeBtn");
var likeCount = document.getElementById("likeCount");
var likeGiven = false;

likeBtn.onclick = function() {
    if (!likeGiven) {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        likeGiven = true;
    } else {
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likeGiven = false;
    }
}

// الحفظ
var bookmark = document.getElementById("bookmark");

bookmark.onclick = function() {
    bookmark.style.color = bookmark.style.color === "yellow" ? "white" : "yellow";
}

// المتابعة
var followBtn = document.querySelector(".follow-btn");

followBtn.onclick = function() {
    followBtn.textContent = "✔️";
    setTimeout(function() {
        followBtn.textContent = "متابعة";
    }, 2000);
}

// التعامل مع الأيقونات في نافذة التحميل

// التعامل مع أيقونة الهاشتاق
var hashtagIcon = document.getElementById("hashtagIcon");

hashtagIcon.onclick = function() {
    hashtagIcon.classList.toggle("active");
}

// التعامل مع أيقونة الصور
var photoIcon = document.getElementById("photoIcon");

photoIcon.onclick = function() {
    // فتح نافذة اختيار الصور من الجهاز
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = function(event) {
        var files = event.target.files;
        if (files.length > 0) {
            console.log("تم اختيار صورة: ", files[0]);
            // هنا يمكنك إضافة كود لمعالجة الصورة المختارة
        }
    };
}

// التعامل مع أيقونة الإيموجي
var emojiIcon = document.getElementById("emojiIcon");

emojiIcon.onclick = function() {
    // استدعاء لوحة المفاتيح الخاصة بالإيموجي
    var textArea = document.getElementById("postContent");
    textArea.focus();
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
