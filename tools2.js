// JavaScript لتوسيع المحتوى
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
});
function hundleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active")
}
document.querySelectorAll('.read-more').forEach(button => {
    button.onclick = function() {
        const contentId = this.getAttribute('data-content');
        const hiddenContent = document.getElementById(contentId);
        hiddenContent.style.display = hiddenContent.style.display === "none" ? "block" : "none";
    };
});

// وظيفة زر "مشاركة"
document.querySelectorAll('.share-button').forEach(button => {
    button.onclick = function() {
        const url = window.location.href; // احصل على عنوان URL الحالي
        navigator.clipboard.writeText(url).then(() => {
            alert("تم نسخ الرابط إلى الحافظة!");
        }, (err) => {
            console.error('فشل في نسخ الرابط: ', err);
        });
    };
});

// وظيفة زر "تعليق"
document.querySelectorAll('.comment-button').forEach(button => {
    button.onclick = function() {
        const commentSection = document.querySelector('.comment-section');
        commentSection.style.display = 'block';

        document.getElementById('submit-comment').onclick = function() {
            const commentInput = document.getElementById('comment-input');
            const commentsList = document.getElementById('comments-list');
            const newComment = document.createElement('div');
            newComment.textContent = commentInput.value;
            commentsList.appendChild(newComment);
            commentInput.value = ''; // امسح خانة التعليق بعد الإرسال
        };
    };
});