const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const points = document.getElementById("points");
const modal = document.getElementById("myModal");
const langButton = document.getElementById("langButton");
let spanClose = document.getElementsByClassName("close")[0];





let count = 0;

buttonA.addEventListener("click", () => {
count++;
points.innerHTML = count;;
if(count>=30){
    buttonB.disabled = false;
}
});

buttonB.addEventListener("click", () => {
    count++;count++;
    points.innerHTML = count;
    if(count>=90){
        buttonC.disabled = false;
    }
    });

langButton.onclick = function() {
        modal.style.display = "block";
      }

spanClose.onclick = function() {
        modal.style.display = "none";
      }