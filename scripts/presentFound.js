function setBackgroundForPresent() {
  function changeDialogueColor() {
    dialogue.style.color = "#000";
    dialogue.innerHTML = "";
  }

  function clearAnimationContainer() {
    cardContainer.innerHTML = "";
  }

  function clearSnow() {
    var snow = document.querySelector(".snow");
    snow.innerHTML = "";
  }

  function createSwirlGift() {
    var introGift = document.createElement("div");
    introGift.className = "intro__gift";
    cardContainer.appendChild(introGift);
  }

  changeDialogueColor();
  changeContainerBackground();
  clearAnimationContainer();
  clearSnow();
  createSwirlGift();
}

function santaFoundPresent() {
  setBackgroundForPresent();
  setTimeout(getRandomGift, 1000);
  setTimeout(addExitQuestion, 4000);
}

function santaFoundStick() {
  setBackgroundForPresent();
  setTimeout(getStick, 1000);
  setTimeout(addExitQuestion, 4000);
}
