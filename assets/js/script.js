// It contains all app operations and is invoked by window.onload
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
      "./assets/img/counter.jpeg"
   ];

   // Count value initially set to 0
   const count = document.querySelector(".count");
   let countValue = 0;
   count.textContent = countValue;

   const btnsContainer = document.querySelector(".buttons-container");

   // Create DOM elements
   function createNewElement(tagName, className, innerHTML, parent) {
      const newElement = document.createElement(tagName);
      newElement.className = className;
      newElement.innerHTML = innerHTML;
      parent.append(newElement);
      return newElement;
   }

   // Minus button
   const decrementBtn = createNewElement("button", "minus", "-", btnsContainer);
   
   // Plus button
   const incrementBtn = createNewElement("button", "plus", "+", btnsContainer);
   
   // Reset button
   const resetBtn = document.querySelector(".reset");

   
   // Open the app and Update the counter: 
   document.body.addEventListener("click", (event) => {

      if (event.target === openApp) {
         openApp.classList.add("hidden");
         counterApp.classList.remove("hidden");
         document.body.style.background = "linear-gradient(to bottom, hsl(217deg    57% 6%), #350a09, hsl(217deg 57% 6%) )";

         // Theme song in the background
         const themeSound = new Audio("./assets/audio/theme.mp3");
         themeSound.volume = 0.023;
         themeSound.play();
      
      // Increments the value
      } else if (event.target === incrementBtn) {
         countValue++;
         count.textContent = countValue;

         // A sound of flickering is heard 
         const incrementSound = new Audio("./assets/audio/flickering.mp3");
         incrementSound.play();

         // The image changes, turning on one light bulb at a time
         for (let i = 0; i < imgsArray.length; i++) {
            if ((countValue - 1) % imgsArray.length === i) {
               appImg.src = imgsArray[i];
               break;
            } 
         };

      // Decreases the value
      } else if (event.target === decrementBtn) {
         if (countValue > 0) {
         countValue--;
         count.textContent = countValue;

            // The image changes, returning to the previous one
            for (let i = 0; i < imgsArray.length; i++) {
               if ((countValue - 1) % imgsArray.length === i) {
                  appImg.src = imgsArray[i];
                  break;

               } else if (countValue === 0) {
               appImg.src = "./assets/img/letters-wall.png";
               }     
            }
         }
      
      // Reset the value  
      } else if (event.target === resetBtn) {
         countValue = 0;
         count.textContent = countValue;
         
         // The sound of the Demogorgon is heard
         const resetSound = new Audio("./assets/audio/demogorgon.mp3");
         resetSound.volume = 0.085;
         resetSound.play();

         // The image returns to the initial one
         appImg.src = "./assets/img/letters-wall.png";
      }
   });
};

window.onload = () => {
   setUpEvents();
};
