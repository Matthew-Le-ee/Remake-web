const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} 
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n=> n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let modal = document.getElementById("myModal");

let btn = document.getElementById("click");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

