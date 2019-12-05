var rightButton = document.createElement("button");
var leftButton = document.createElement("button");
var buttonsContainer = document.createElement("div");

function createButtonsOfChoice() {
  rightButton.classList.add("button", "rude__button"); 
  leftButton.classList.add("button", "polite__button");
  buttonsContainer.className = 'buttons__container';

  container.appendChild(buttonsContainer);
  buttonsContainer.append(leftButton, rightButton);
}

function addFirstQuestionText() {
  createButtonsOfChoice();
  rightButton.innerHTML = 'Nooo... różnie bywało...';
  leftButton.innerHTML = 'W ciul grzeczny!'
}

function addExitQuestion() {
  createButtonsOfChoice();
  rightButton.innerHTML = 'Wolę coś innego...';
  rightButton.classList.remove('rude__button');
  rightButton.classList.add("another-gift__button");
  leftButton.innerHTML = 'Dziękuję!';
  leftButton.classList.add("thanks__button");
  leftButton.classList.remove('polite__button');
  buttonsContainer.style.top = '340px'
}

setTimeout(addFirstQuestionText, 24500);