let wishes = document.createElement('article');
wishes.className = 'wishes';

function loadWishes() {
  dialogue.innerHTML = 'Wesołych i pogodnych Świąt';
  buttonsContainer.innerHTML = '';
  dialogue.appendChild(wishes);
  wishes.innerHTML = 'życzy';
  let paragraph = document.createElement('p');
  wishes.appendChild(paragraph);
  paragraph.innerHTML = 'Dział Telematyki PKM';
  cardContainer.innerHTML = '';
}

function loadDeer() {
  changeContainerBackground();
  changeDialogueColor();
  dialogue.innerHTML = 'Trąci nieco zachłannością, nie sądzisz?';
  clearAnimationContainer();
  buttonsContainer.innerHTML = '';

  let deer = document.createElement('div');
  deer.className = 'deer';

}

function loadDeerOrWishes() {
    var target = event.target;
    if (target.classList.contains("thanks__button")) {
      loadWishes();
    } else if (target.classList.contains("another-gift__button")) {
      loadDeer();
    }
  }
  
  window.addEventListener("click", loadDeerOrWishes);