
// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Animate Items
const title = document.querySelector(".title");
const image = document.querySelector(".logo img");
const description = document.querySelector(".info h3");


// Moving Animation event
container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; 
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    image.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popout
    title.style.transform = "translateZ(0px)";
    image.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
});