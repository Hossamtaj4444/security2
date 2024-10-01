let followerCount = 0;

function addFollower() {
    followerCount += 1;
    document.getElementById('follower-count').textContent = followerCount;
    document.getElementById('follow-btn').style.display = 'none';
}


// وظيفة لفتح النافذة المنبثقة
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

// وظيفة لإغلاق النافذة المنبثقة
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
function toggleCoverOptions(event) {
    event.stopPropagation(); // منع الحدث من الانتقال إلى العناصر الأخرى
    const menu = document.querySelector('.cover-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; // تبديل ظهور القائمة
}

function toggleProfileOptions(event) {
    event.stopPropagation(); // منع الحدث من الانتقال إلى العناصر الأخرى
    const menu = document.querySelector('.profile-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; // تبديل ظهور القائمة
}

function viewCoverImage() {
    const coverImage = document.querySelector('.cover-photo img');
    const coverImageUrl = coverImage.src;
    window.open(coverImageUrl, '_blank'); // فتح الصورة في نافذة جديدة
    closeMenus(); // إغلاق القوائم
}

function uploadCoverImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const coverImage = document.querySelector('.cover-photo img');
            coverImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click(); // فتح نافذة اختيار الملفات
    closeMenus(); // إغلاق القوائم
}

function viewProfileImage() {
    const profileImage = document.getElementById('profile-photo');
    const profileImageUrl = profileImage.src;
    window.open(profileImageUrl, '_blank'); // فتح الصورة في نافذة جديدة
    closeMenus(); // إغلاق القوائم
}

function uploadProfileImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById('profile-photo');
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click(); // فتح نافذة اختيار الملفات
    closeMenus(); // إغلاق القوائم
}

// إغلاق القوائم عند النقر في أي مكان آخر
document.addEventListener('click', closeMenus);

function closeMenus() {
    const coverMenu = document.querySelector('.cover-menu');
    const profileMenu = document.querySelector('.profile-menu');
    coverMenu.style.display = 'none';
    profileMenu.style.display = 'none';
}