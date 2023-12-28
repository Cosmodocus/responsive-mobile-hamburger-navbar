let hamburger = document.querySelector('.hamburger');
let navBar = document.querySelector('.navbar-menu');
let navLinks = document.querySelectorAll('.navbar-items');

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle('active');
})

navLinks.forEach(link =>{
    link.addEventListener("click", ()=>{
        navBar.classList.remove('active');
    });
});

