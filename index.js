var navBtn = document.querySelector(".nav-btn")
var navLinks = document.querySelector(".nav-links")  
var navLinksList = document.querySelector(".nav-links li");

navBtn.addEventListener("click", function () {
    this.classList.toggle("click");
    navLinks.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings: ["Fullstack Developer", "Backend Developer"],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
});