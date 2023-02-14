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
const pointsInfSec = document.getElementById("infSectionPoints");
const pointsSec = document.getElementById("pointsSection")
const carousel0 = document.getElementById("carousel0");
const carousel1 = document.getElementById("carousel1");
const carousel2 = document.getElementById("carousel2");
const carousel3 = document.getElementById("carousel3");
const imgTutBut0 = document.getElementById("imgTutBut0");
const imgTutBut1 = document.getElementById("imgTutBut1");
const imgTutBut2 = document.getElementById("imgTutBut2");
const carousel = [carousel0, carousel1, carousel2, carousel3];
const left = document.getElementById("left");
const right = document.getElementById("right");
const portugal = document.getElementById("portugal");
const england = document.getElementById("england");
const portugalImg = document.getElementById("portugalImg");
const englandImg = document.getElementById("englandImg");
const portugalTrad = ["Pontos: ", "Jogo", "Tutorial", "Pontos", 
"Tu és uma coisa sem forma! <br> Clica nos buttons para evoluir e juntar pontos!<br>Mais pontos desbloqueiam novos botoes, novos butoes desbloqueiam mais pontos!",
"Botao (+1 ponto) <br> Evolui/desbloqeia o proximo botao aos 15 pontos",
"Botao (+2 ponto) <br> Evolui/desbloqeia o proximo botao aos 40 pontos",
"Botao (+1 ponto) <br> Evolui/desbloqeia o proximo botao aos 15 pontos"];
const engPreset = document.getElementsByClassName("Eng");
let engTrad = [];
let carouselCount = 0;
let count = 0;


portugal.addEventListener("click", () =>{
    englandImg.style.display = "none";
    portugalImg.style.display = "block";
    for (let i = 0; i < engPreset.length; i++) {
        engTrad[i] = engPreset[i].innerHTML;
        engPreset[i].innerHTML = portugalTrad[i];
    }
});

england.addEventListener("click", () =>{
    portugalImg.style.display = "none";
    englandImg.style.display = "block";
    for (let i = 0; i < engPreset.length; i++) {
        engPreset[i].innerHTML = engTrad[i];
        
    }
});


buttonA.addEventListener("click", () => {
  count++;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});

buttonB.addEventListener("click", () => {
  count++;
  count++;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});

buttonC.addEventListener("click", () => {
  count++;
  count++;
  count++;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});

function updateButtons() {
  if (count >= 15) {
    buttonB.disabled = false;
    buttonA.style.backgroundImage = "url(Images/egg.gif)";
    buttonA.style.backgroundSize = "contain";
    buttonA.style.animation = "marquee 30s infinite linear";
  }
  if (count >= 40) {
    buttonC.disabled = false;
    buttonB.style.backgroundImage = "url(Images/potatoeBird.gif)";
    buttonB.style.backgroundSize = "contain";
    buttonB.style.animation = "marquee 30s infinite linear";
  }
  if (count >= 90) {
    buttonD.disabled = false;
    buttonC.style.backgroundImage = "url(Images/Business_Pigeon.gif)";
    buttonC.style.backgroundSize = "contain";
    buttonC.style.animation = "marquee 30s infinite linear";
  }
}

left.addEventListener("click", () =>{
    if(carouselCount == 0){
        carouselCount = carousel.length;
    }else{
carouselCount--;
    }
carouselMove(carouselCount);
});



right.addEventListener("click", () =>{
    if(carouselCount == carousel.length){
        carouselCount = 0;
    }else{
carouselCount++;
    }
    carouselMove(carouselCount);
});

function carouselMove(carouselCount){
    if(carouselCount == 0){
carousel0.style.display="";
carousel1.style.display="none";
carousel2.style.display="none";
carousel3.style.display="none";
    }
    if(carouselCount == 1){
        carousel0.style.display="none";
        carousel1.style.display="";
        carousel2.style.display="none";
        carousel3.style.display="none";
    }
    if(carouselCount == 2){
        carousel0.style.display="none";
        carousel1.style.display="none";
        carousel2.style.display="";
        carousel3.style.display="none";
    }
    if(carouselCount == 3){
        carousel0.style.display="none";
        carousel1.style.display="none";
        carousel2.style.display="none";
        carousel3.style.display="";
    }

}




langButton.onclick = function () {
  modal.style.display = "block";
};

spanCloseLang.onclick = function () {
  modal.style.display = "none";
};

tabGame.onclick = function () {
  tabGame.style.transition = "all 1s";
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
  pointsInfSec.style.display = "none";
};

tabTutorial.onclick = function () {
  tabTutorial.style.transition = "all 1s";
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
  pointsInfSec.style.display = "none";
};

tabPoints.onclick = function () {
  tabPoints.style.transition = "all 1s";
  tabGame.style.background = "yellow";
  tabTutorial.style.background = "yellow";
  tabPoints.style.background = "blue";
  tabPoints.style.color = "white";
  tabPoints.style.fontSize = "larger";
  tabTutorial.style.fontSize = "small";
  tabGame.style.fontSize = "small";
  tabGame.style.color = "black";
  tabTutorial.style.color = "black";
  tutorial.style.display = "none";
  games.style.display = "none";
  pointsInfSec.style.display = "";
};
