var navBtn = document.querySelector(".nav-btn")
var navLinks = document.querySelector(".nav-links")  
var navLinksList = document.querySelectorAll(".nav-links li"); 

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navLinks.classList.toggle("open");
});

navLinksList.forEach(li => 
    li.addEventListener("click", () => {
        navBtn.classList.remove("active");
        navLinks.classList.remove("open")
    })
);