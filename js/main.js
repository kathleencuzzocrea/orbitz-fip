console.log("JS file is connected :)");

// Variables 
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

// for quantity clicker on products page
let quantity = 0;
const numberDiv = document.querySelectorAll(".quantity-number");
const add = document.querySelectorAll(".plus");
const subtract = document.querySelectorAll(".minus");

// for hotspots on home page
// from marvel build
const lightBox = document.querySelector("#lightbox");
const stars = document.querySelectorAll("#bottle-info div a");
const content = document.querySelector("#lightbox article");

// for img slider
// from week 12
const slider = document.querySelector("#image-slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
// let slideWidth = slider.clientWidth;
let currentIndex = 0;



let drinkInfo = [
    {
        title: "Texture Technology",
        description: "The magic behind the floating stars isn't alien technology—it’s Gellan Gum. This plant-based ingredient creates an invisible microscopic web that holds the orbs in place, and they have the exact same density as the beverage so they didn't sink or float!"
    },
    {
        title: "Space-age Sustainability",
        description: "Orbitz bottles are made out of 100% recyclable material. Inspired by the vast, shimmering beauty of deep space, we’ve crafted a beverage experience that is as sustainable as it is stellar."
    },
    {
        title: "Futuristic Flavours",
        description: "Orbitz currently comes in four different fantastic flavours: Blasting Blueberry, Solar Strawberry, Orbital Orange, and Lunar Lemon. We currently offer all four flavours in classic and zero-sugar variants."
    }
];

// ------ Functions --------------
// for burger menu
function hamburgerMenu(){
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
}

// for quantity clicker
// from clicker game class example
function addNumber(e) {

    // had to research how to target the specific div being clicked
    const addNum = e.target.parentElement.querySelector(".quantity-number");

    quantity++;
    addNum.textContent = quantity;
}

function subtractNumber(e){
    if (quantity === 0) {
        return;
    }
    const subNum =e.target.parentElement.querySelector(".quantity-number");
    quantity--;
    subNum.textContent = quantity;
}

// for homepage hotspots
function addContent(){
    console.log(drinkInfo[this.dataset.drinkIndex].title);
    console.log(drinkInfo[this.dataset.drinkIndex].description);

    // style lightboxes individually
    lightBox.classList.remove("lightbox0" , "lightbox1", "lightbox2");
    lightBox.classList.add(`lightbox${this.dataset.drinkIndex}`);

    content.innerHTML = "";

    let drinkTitle = document.createElement("h3");
    drinkTitle.textContent = drinkInfo[this.dataset.drinkIndex].title;
    // drinkTitle.classList
    content.appendChild(drinkTitle);

    let drinkDesc = document.createElement("p");
    drinkDesc.textContent = drinkInfo[this.dataset.drinkIndex].description;
    // drinkDesc.classList;
    content.appendChild(drinkDesc);
}

// for image slider

if(window.location.pathname === "/about.html"){
    let slideWidth = slider.clientWidth;
    function showSlide(index) {
    console.log(index);
    const newTransformValue = -index * slideWidth + 'px';
    console.log(newTransformValue);
    slider.style.transform = `translateX(${newTransformValue})`;
}

function prevSlide() {
    currentIndex--;
    //if the count is less than 0, go to last slide
    if(currentIndex < 0) {
        currentIndex = slider.children.length-1;
    }
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    //if count is greate than or equal to the number of slides restart
    if(currentIndex >= slider.children.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex);
}


updateSlideWidth();

// event listeners

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

window.addEventListener("resize", updateSlideWidth);
}

// function showSlide(index) {
//     console.log(index);
//     const newTransformValue = -index * slideWidth + 'px';
//     console.log(newTransformValue);
//     slider.style.transform = `translateX(${newTransformValue})`;
// }

// function prevSlide() {
//     currentIndex--;
//     //if the count is less than 0, go to last slide
//     if(currentIndex < 0) {
//         currentIndex = slider.children.length-1;
//     }
//     showSlide(currentIndex);
// }

// function nextSlide() {
//     currentIndex++;
//     //if count is greate than or equal to the number of slides restart
//     if(currentIndex >= slider.children.length) {
//         currentIndex = 0;
//     }
//     showSlide(currentIndex);
// }

// function updateSlideWidth() {
//     slideWidth = slider.clientWidth;
//     showSlide(currentIndex);
// }


// updateSlideWidth();

// ----- Event Listeners---------

// for burger con
button.addEventListener("click", hamburgerMenu);

// for quantity clickers
add.forEach(plus => {
   plus.addEventListener("click", addNumber); 
});

subtract.forEach(minus => {
    minus.addEventListener("click", subtractNumber);
});

// for homepage bottle hot spots
stars.forEach(star => star.addEventListener("click", addContent));

// for image slider
// prevBtn.addEventListener("click", prevSlide);
// nextBtn.addEventListener("click", nextSlide);

// window.addEventListener("resize", updateSlideWidth);