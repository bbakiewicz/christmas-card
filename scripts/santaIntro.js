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

let santaIntroText = [
  "Ho! Ho! Zbliż no się i powiedz...",
  "jak to było u Ciebie...",
  "z grzecznością w tym roku?"
];

function santaIntro() {
  buttonsContainer.innerHTML = ''
  changeDialogueColor();
  changeContainerBackground();
  clearAnimationContainer();
  createSanta();
  setTimeout(function() {
    santaSays(santaIntroText);
  }, 1000);
  setTimeout(addFirstQuestionText, 13500);
}
