function createButtonsOfChoice() {
  var rudeButton = document.createElement("button");
  rudeButton.classList.add("button", "rude__button");
  rudeButton.innerHTML = 'Nooo... różnie bywało...';

  var politeButton = document.createElement("button");
  politeButton.classList.add("button", "polite__button");
  politeButton.innerHTML = 'W ciul grzeczny!'

  var buttonsContainer = document.createElement("div");
  buttonsContainer.className = 'buttons__container';

  container.appendChild(buttonsContainer);
  buttonsContainer.append(politeButton, rudeButton);
}

setTimeout(createButtonsOfChoice, 24500) ;