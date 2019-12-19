let wishes = document.createElement('article');
wishes.className = 'wishes';

function loadWishes() {
  container.style.background = 'radial-gradient(circle, rgba(0,106,146,1) 0%, rgba(30,65,102,1) 100%)';
  dialogue.style.color = "#fff";
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
      loadDeerWithWishes();
    }
  }
  
  window.addEventListener("click", loadDeerOrWishes);