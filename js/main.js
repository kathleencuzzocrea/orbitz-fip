console.log("JS file is connected :)");

// Variables 
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

let quantity = 0;
const numberDiv = document.querySelectorAll(".quantity-number");
const add = document.querySelectorAll(".plus");
const subtract = document.querySelectorAll(".minus");

// Functions
function hamburgerMenu(){
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
}

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

// Event Listeners
button.addEventListener("click", hamburgerMenu);

add.forEach(plus => {
   plus.addEventListener("click", addNumber); 
});

subtract.forEach(minus => {
    minus.addEventListener("click", subtractNumber);
})