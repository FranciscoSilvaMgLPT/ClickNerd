const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const buttonE = document.getElementById("buttonE");
const buttonF = document.getElementById("buttonF");
const buttonG = document.getElementById("buttonG");
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
"Botao (+2 pontos) <br> Evolui/desbloqeia o proximo botao aos 40 pontos",
"Botao (+4 pontos) <br> Evolui/desbloqeia o proximo botao aos 80 pontos",
"Botao (+8 pontos) <br> Evolui/desbloqeia o proximo botao aos 160 pontos",
"Botao (+16 pontos) <br> Evolui/desbloqeia o proximo botao aos 320 pontos",
"Botao (+32 pontos) <br> Evolui/desbloqeia o proximo botao aos 500 pontos",
"Botao (+64 pontos) <br> Evolui aos 900 pontos! ULTIMA ETAPA! ULTIMA EVOLUÇAO!"];
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
  count=count+2;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});

buttonC.addEventListener("click", () => {
  count=count+4;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});

buttonD.addEventListener("click", () => {
  count=count+8;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});

buttonE.addEventListener("click", () => {
  count=count+16;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});


buttonF.addEventListener("click", () => {
  count=count+32;
  points.innerHTML = count;
  pointsSec.innerHTML = count;
  updateButtons();
});


buttonG.addEventListener("click", () => {
  count=count+64
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
    imgTutBut0.src="Images/egg.gif";
  }
  if (count >= 40) {
    buttonC.disabled = false;
    buttonB.style.backgroundImage = "url(Images/potatoeBird.gif)";
    buttonB.style.backgroundSize = "contain";
    buttonB.style.animation = "marquee 30s infinite linear";
    imgTutBut1.src="Images/potatoeBird.gif"
  }
  if (count >= 80) {
    buttonD.disabled = false;
    buttonC.style.backgroundImage = "url(Images/Business_Pigeon.gif)";
    buttonC.style.backgroundSize = "contain";
    buttonC.style.animation = "marquee 30s infinite linear";
    imgTutBut2.src="Images/Business_Pigeon.gif"
  }
  if (count >= 160) {
    buttonE.disabled = false;
    buttonD.style.backgroundImage = "url(Images/baby.gif)";
    buttonD.style.backgroundSize = "contain";
    buttonD.style.animation = "marquee 30s infinite linear";
  }
  if (count >= 320) {
    buttonF.disabled = false;
    buttonE.style.backgroundImage = "url(Images/human.gif)";
    buttonE.style.backgroundSize = "contain";
    buttonE.style.animation = "marquee 30s infinite linear";
  }
  if (count >= 500) {
    buttonG.disabled = false;
    buttonF.style.backgroundImage = "url(Images/working.gif)";
    buttonF.style.backgroundSize = "contain";
    buttonF.style.animation = "marquee 30s infinite linear";
  }
  if (count >= 900) {
    buttonG.style.backgroundImage = "url(Images/mindera_walk.gif)";
    buttonG.style.backgroundSize = "contain";
    buttonG.style.animation = "marquee 30s infinite linear";
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
