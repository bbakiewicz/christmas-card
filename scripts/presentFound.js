function setBackgroundForPresent() {
  function changeDialogueColor() {
    dialogue.style.color = "#000";
    dialogue.innerHTML = "";
  }

  function changeContainerBackground() {
    container.style.background =
      "radial-gradient(circle, rgba(175,0,0,1) 0%, rgba(102,30,30,1) 100%)";
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
