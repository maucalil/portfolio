var navBtn = document.querySelector(".nav-btn")
var navLinks = document.querySelector(".nav-links")  
var navLinksList = document.querySelectorAll(".nav-links li"); 

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("click");
    navLinks.classList.toggle("open");
});

navLinksList.forEach(li => 
    li.addEventListener("click", () => {
        navBtn.classList.remove("click");
        navLinks.classList.remove("open")
    })
);

var typed = new Typed(".input", {
    strings: ["Fullstack Developer", "Backend Developer"],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
});