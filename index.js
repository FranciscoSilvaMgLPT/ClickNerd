const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const points = document.getElementById("points");
const modal = document.getElementById("myModal");
const langButton = document.getElementById("langButton");
let spanCloseLang = document.getElementsByClassName("closeLang")[0];
const tabGame = document.getElementById("tablinkGame");
const tabTutorial = document.getElementById("tablinkTutorial");
const tabPoints = document.getElementById("tablinkPoints");
const games = document.getElementById("infSectionGame");
const tutorial = document.getElementById("infSectionTutorial");



let count = 0;

buttonA.addEventListener("click", () => {
count++;
points.innerHTML = count;;
if(count>=15){
    buttonB.disabled = false;
    buttonA.style.backgroundImage = "url(Images/egg.gif)";
    buttonA.style.backgroundSize = "contain";
    buttonA.style.animation = "marquee 30s infinite linear";
}
});

buttonB.addEventListener("click", () => {
    count++;count++;
    points.innerHTML = count;
    if(count>=60){
        buttonC.disabled = false;
        buttonB.style.backgroundImage = "url(Images/potatoeBird.gif)";
        buttonB.style.backgroundSize = "contain";
        buttonB.style.animation = "marquee 30s infinite linear";
    }
   
    });

    buttonC.addEventListener("click", () => {
        count++;count++;count++;
        points.innerHTML = count;
        if(count>=120){
            buttonD.disabled = false;
            buttonC.style.backgroundImage = "url(Images/Business_Pigeon.gif)";
            buttonC.style.backgroundSize = "contain";
            buttonC.style.animation = "marquee 30s infinite linear";
        }
       
        });

langButton.onclick = function() {
        modal.style.display = "block";
      }
      
spanCloseLang.onclick = function() {
        modal.style.display = "none";
      }

tabGame.onclick = function(){
    tabGame.style.transition = "all 2s";
    tabGame.style.background = "blue";
    tabGame.style.color = "white";
    tabGame.style.fontSize = "larger";
    tabTutorial.style.background = "yellow";
    tabPoints.style.background = "yellow";
    tabPoints.style.fontSize = "small";
    tabTutorial.style.fontSize = "small";
    tabTutorial.style.color = "black";
    tabPoints.style.color = "black";
    games.style.display = "";
    tutorial.style.display = "none";
}

tabTutorial.onclick = function(){
    tabTutorial.style.transition = "all 2s";
    tabGame.style.background = "yellow";
    tabTutorial.style.background = "blue";
    tabTutorial.style.color = "white";
    tabTutorial.style.fontSize = "larger";
    tabPoints.style.background = "yellow";
    tabPoints.style.fontSize = "small";
    tabGame.style.fontSize = "small";
    tabGame.style.color = "black";
    tabPoints.style.color = "black";
    tutorial.style.display = "";
    games.style.display = "none"; 
}

tabPoints.onclick = function(){
    tabPoints.style.transition = "all 2s";
    tabGame.style.background = "yellow";
    tabTutorial.style.background = "yellow";
    tabPoints.style.background = "blue";
    tabPoints.style.color = "white";
    tabPoints.style.fontSize = "larger";
    tabTutorial.style.fontSize = "small";
    tabGame.style.fontSize = "small";
    tabGame.style.color = "black";
    tabTutorial.style.color = "black";
}
