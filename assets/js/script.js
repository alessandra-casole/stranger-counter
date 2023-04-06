function setUpEvents() {

const openApp = document.querySelector(".open-app");
const counterApp = document.querySelector(".counter");
const appImg = document.querySelector(".app-img img");

const imgsArray = [
   "./assets/img/c-letter.jpeg",
   "./assets/img/o-letter.jpeg",
   "./assets/img/u-letter.jpeg",
   "./assets/img/n-letter.jpeg",
   "./assets/img/t-letter.jpeg",
   "./assets/img/e-letter.jpeg",
   "./assets/img/r-letter.jpeg",
   "./assets/img/counter.jpeg",
];

const count = document.querySelector(".count");
let countValue = 0;
count.textContent = countValue;

const btnsContainer = document.querySelector(".buttons-container");

const decrementBtn = document.createElement("button");
decrementBtn.setAttribute("class", "minus");
decrementBtn.textContent = "-";
btnsContainer.append(decrementBtn);

const incrementBtn = document.createElement("button");
incrementBtn.setAttribute("class", "plus");
incrementBtn.textContent = "+";
btnsContainer.append(incrementBtn);

const resetBtn = document.querySelector(".reset");

// Functions + events

function displayApp() {
   openApp.classList.add("hidden");
   counterApp.classList.remove("hidden");
   document.body.style.background = "linear-gradient(to bottom, hsl(217deg 57% 6%), #350a09, hsl(217deg 57% 6%) )";
   const themeSound = new Audio("./assets/audio/theme.mp3");
   themeSound.volume = 0.02;
   themeSound.play();
}

openApp.addEventListener("click", () => {
   displayApp();
});
 
// Increase
function increase() {
   countValue++;
   count.textContent = countValue;
   
   const incrementSound = new Audio("./assets/audio/flickering.mp3");
   incrementSound.play();

   for (let i = 0; i < imgsArray.length; i++) {
      if ((countValue - 1) % imgsArray.length === i) {
         appImg.src = imgsArray[i];
         break;
      } 
   };
}

incrementBtn.addEventListener("click", () => {
   increase();
});

// Decrease
function decrease() {

   if (countValue > 0) {
      countValue--;
      count.textContent = countValue;

      for (let i = 0; i < imgsArray.length; i++) {
         if ((countValue - 1) % imgsArray.length === i) {
            appImg.src = imgsArray[i];
            break;

         } else if (countValue === 0) {
            appImg.src = "./assets/img/letters-wall.png";
         }     
      }
   }
}

decrementBtn.addEventListener("click", () => {
   decrease();
});

// Reset
function reset() {
   countValue = 0;
   count.textContent = countValue;
   const resetSound = new Audio("./assets/audio/demogorgon.mp3");
   resetSound.volume = 0.083;
   resetSound.play();
   appImg.src = "./assets/img/letters-wall.png";  
}

resetBtn.addEventListener("click", () => {
   reset();
});
}

window.onload = () => {
   setUpEvents();
};