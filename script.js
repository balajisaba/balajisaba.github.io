/* ============================= */
/* NAVBAR SHADOW ON SCROLL */
/* ============================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {
navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
} else {
navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
}

});



/* ============================= */
/* SMOOTH SCROLL NAVIGATION */
/* ============================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const targetId = this.getAttribute("href");
const targetSection = document.querySelector(targetId);

window.scrollTo({
top: targetSection.offsetTop - 70,
behavior: "smooth"
});

});

});



/* ============================= */
/* SCROLL REVEAL ANIMATION */
/* ============================= */

const revealElements = document.querySelectorAll(
".section, .impact-card, .edu-card, .project-card, .research-card"
);

function revealOnScroll(){

const windowHeight = window.innerHeight;

revealElements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 80){
el.classList.add("visible");
}

});

}

window.addEventListener("scroll", revealOnScroll);



/* ============================= */
/* IMPACT COUNTER ANIMATION */
/* ============================= */

const counters = document.querySelectorAll(".impact-card h3");

let counterStarted = false;

function startCounters(){

if(counterStarted) return;

const impactSection = document.querySelector("#impact");
const position = impactSection.getBoundingClientRect().top;

if(position < window.innerHeight){

counterStarted = true;

counters.forEach(counter => {

const target = +counter.innerText;
let count = 0;

const speed = 40;

const updateCounter = () => {

count += Math.ceil(target / speed);

if(count < target){
counter.innerText = count;
setTimeout(updateCounter, 40);
}
else{
counter.innerText = target;
}

};

updateCounter();

});

}

}

window.addEventListener("scroll", startCounters);



/* ============================= */
/* ACTIVE NAV LINK */
/* ============================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.offsetHeight;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});



/* ============================= */
/* INITIAL REVEAL */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {

revealOnScroll();
startCounters();

});
