var container = document.querySelector(".container");
container.style.background =
"radial-gradient(circle, rgba(0,106,146,1) 0%, rgba(30,65,102,1) 100%)";

var cardContainer = document.querySelector("#animation__container");
var dialogue = document.querySelector(".dialogue");
dialogue.style.color = "#fff";
dialogue.innerHTML = "Brak ulubionej strony?";

dialogue.appendChild(wishes);
  wishes.innerHTML = 'Naciśnij przycisk i poczuj magię Świąt';

var startButton = document.createElement("button");
var buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttons__container";


container.appendChild(buttonsContainer);
buttonsContainer.appendChild(startButton);
startButton.classList.add("button", "start__button");
startButton.innerHTML = "START";

loadDeer();

function startWishes() {
    var target = event.target;
    if (target.classList.contains("start__button")) {
      santaIntro()
      playMusic()
    }
  }
  
  startButton.addEventListener("click", startWishes);
