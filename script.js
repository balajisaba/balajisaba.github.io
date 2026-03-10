/* =====================================
CITATION GRAPH (Chart.js)
===================================== */

const chartElement = document.getElementById("citationChart");

if(chartElement){

const ctx = chartElement.getContext("2d");

new Chart(ctx,{
type:'line',

data:{
labels:[
"2021",
"2022",
"2023",
"2024",
"2025",
"2026"
],

datasets:[{

label:"Citations",

data:[
0,
1,
2,
3,
7,
10
],

borderWidth:3,

tension:0.4,

fill:true

}]

},

options:{

responsive:true,

plugins:{
legend:{
display:true
}
},

scales:{
y:{
beginAtZero:true
}
}

}

});

}


/* =====================================
SCROLL FADE ANIMATION
===================================== */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".section").forEach(section=>{
observer.observe(section);
});


/* =====================================
NAVBAR SCROLL SHADOW
===================================== */

window.addEventListener("scroll",function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

}else{

navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

}

});


/* =====================================
SMOOTH NAVIGATION SCROLL
===================================== */

document.querySelectorAll('.nav-links a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

window.scrollTo({
top: target.offsetTop - 80,
behavior: 'smooth'
});

});

});


/* =====================================
BUTTON HOVER MICRO ANIMATION
===================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mouseenter",()=>{
btn.style.transform="scale(1.05)";
})

btn.addEventListener("mouseleave",()=>{
btn.style.transform="scale(1)";
})

});


/* =====================================
PROFILE CARD HOVER GLOW
===================================== */

const profiles = document.querySelectorAll(".profile-grid a");

profiles.forEach(card=>{

card.addEventListener("mouseenter",()=>{
card.style.boxShadow="0 10px 35px rgba(0,86,255,0.3)";
})

card.addEventListener("mouseleave",()=>{
card.style.boxShadow="";
})

});


/* =====================================
TYPEWRITER EFFECT (HERO TITLE)
===================================== */

const title = document.querySelector(".hero-text h1");

if(title){

const text = title.textContent;

title.textContent = "";

let index = 0;

function typeWriter(){

if(index < text.length){

title.textContent += text.charAt(index);

index++;

setTimeout(typeWriter,80);

}

}

typeWriter();

}


/* =====================================
SCROLL PROGRESS BAR
===================================== */

const progressBar = document.createElement("div");

progressBar.style.position="fixed";
progressBar.style.top="0";
progressBar.style.left="0";
progressBar.style.height="4px";
progressBar.style.background="#0056ff";
progressBar.style.zIndex="1000";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrollPercent =
(scrollTop / scrollHeight) * 100;

progressBar.style.width = scrollPercent + "%";

});
