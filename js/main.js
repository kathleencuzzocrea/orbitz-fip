console.log("JS file is connected :)");

// Variables 
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

// Functions
function hamburgerMenu(){
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
}

// Event Listeners
button.addEventListener("click", hamburgerMenu);