var container = document.querySelector(".container");
var cardContainer = document.querySelector("#animation__container");

function clearAnimationContainer() {
  cardContainer.innerHTML = "";
}

function changeDialogueColor() {
  dialogue.style.color = "#000";
  dialogue.innerHTML = "";
}

function changeContainerBackground() {
  container.style.background = "#fff";
}

function santaIntro() {
  

  changeDialogueColor();
  changeContainerBackground();
  clearAnimationContainer();
  createSanta();
}

setTimeout(santaIntro, 10000);

let santaIntroText = [
  "Ho! Ho! Ho!",
  "Zbliż no się i powiedz...",
  "...jak było z u Ciebie",
  "z grzecznością w tym roku?"
];

setTimeout(function() {
  santaSays(santaIntroText);
}, 11000);
