/* =====================================
SCROLL REVEAL ANIMATION
===================================== */

const faders = document.querySelectorAll(".fade");

const appearOptions = {
threshold: 0.15,
rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

entries.forEach(entry => {

if(!entry.isIntersecting) return;

entry.target.classList.add("show");

observer.unobserve(entry.target);

});

}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});


/* =====================================
CITATION CHART
===================================== */

const chartCanvas = document.getElementById("citationChart");

if(chartCanvas){

const ctx = chartCanvas.getContext("2d");

new Chart(ctx,{

type:"bar",

data:{
labels:["2018","2019","2020","2021","2022","2023","2024","2025"],

datasets:[{
label:"Citations",

data:[1,0,0,0,1,1,0,4],

backgroundColor:"#6366f1",

borderRadius:6

}]
},

options:{
responsive:true,

plugins:{
legend:{display:false}
},

scales:{
y:{
beginAtZero:true,
ticks:{precision:0}
}
}

}

});

}


/* =====================================
NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.boxShadow="0 6px 25px rgba(0,0,0,0.15)";

}else{

navbar.style.boxShadow="0 4px 20px rgba(0,0,0,0.05)";

}

});


/* =====================================
ACTIVE MENU HIGHLIGHT
===================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(a => {

a.classList.remove("active");

if(a.getAttribute("href") === "#" + current){
a.classList.add("active");
}

});

});


/* =====================================
IMPACT COUNTER ANIMATION
===================================== */

const counters = document.querySelectorAll(".impact-card h3");

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(!entry.isIntersecting) return;

const counter = entry.target;
const target = +counter.innerText;

let count = 0;

const speed = target / 60;

function updateCounter(){

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);
requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

}

updateCounter();

counterObserver.unobserve(counter);

});

},{
threshold:0.7
});

counters.forEach(counter=>{
counterObserver.observe(counter);
});


/* =====================================
PARALLAX HERO IMAGE
===================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

if(!heroImage) return;

let offset = window.scrollY * 0.2;

heroImage.style.transform = `translateY(${offset}px)`;

});


/* =====================================
CARD HOVER MICRO ANIMATION
===================================== */

const cards = document.querySelectorAll(".card, .profile-card, .list-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transition="all 0.3s ease";
card.style.transform="translateY(-8px) scale(1.02)";

});

card.addEventListener("mouseleave", () => {

card.style.transform="translateY(0) scale(1)";

});

});


/* =====================================
SMOOTH SCROLL FIX
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

window.scrollTo({

top: target.offsetTop - 70,
behavior:"smooth"

});

});

});


/* =====================================
PAGE LOAD ANIMATION
===================================== */

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


/* =====================================
PERFORMANCE OPTIMIZATION
===================================== */

let resizeTimer;

window.addEventListener("resize", () => {

clearTimeout(resizeTimer);

resizeTimer = setTimeout(() => {

/* recalculation placeholder */

},250);

});
