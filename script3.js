// Increment visitors count every time the page is loaded
if (localStorage.visitorsCount) {
    localStorage.visitorsCount = Number(localStorage.visitorsCount) + 1;
} else {
    localStorage.visitorsCount = 1001; // Start from an initial value
}
document.getElementById('visitorsCount').textContent = localStorage.visitorsCount;

// Increment subscribers count on subscription (example only)
function addSubscriber() {
    if (localStorage.subscribersCount) {
        localStorage.subscribersCount = Number(localStorage.subscribersCount) + 1;
    } else {
        localStorage.subscribersCount = 501; // Start from an initial value
    }
    document.getElementById('subscribersCount').textContent = localStorage.subscribersCount;
}

// Increment courses count when a new course is added (example only)
function addCourse() {
    if (localStorage.coursesCount) {
        localStorage.coursesCount = Number(localStorage.coursesCount) + 1;
    } else {
        localStorage.coursesCount = 21; // Start from an initial value
    }
    document.getElementById('coursesCount').textContent = localStorage.coursesCount;
}

// Simulate adding a subscriber (for testing)
// addSubscriber();

// Simulate adding a course (for testing)
// addCourse();



const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
});
function hundleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active")
}
