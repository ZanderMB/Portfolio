const navBar = document.getElementById("navigation");
const navBtn = document
const burgerBtn = document.getElementById("navHamburger");

// Hambruger liSteninger
burgerBtn.addEventListener("click", (e) => {
    navBar.classList.toggle('open')
});