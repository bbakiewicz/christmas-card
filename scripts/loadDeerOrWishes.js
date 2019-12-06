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



function loadDeerOrWishes() {
    var target = event.target;
    if (target.classList.contains("thanks__button")) {
      loadWishes();
    } else if (target.classList.contains("another-gift__button")) {
      loadDeer();
    }
  }
  
  window.addEventListener("click", loadDeerOrWishes);