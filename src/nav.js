const navBar = document.getElementById("navigation");
const burgerBtn = document.getElementById("navHamburger");

// Hambruger liSteninger
burgerBtn.addEventListener("click", (e) => {
    burgerBtn.classList.toggle("open");
    navBar.classList.toggle("open");
});