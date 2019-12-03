function santaLookingForPresents() {
        cardContainer.innerHTML = '';
        dialogue.innerHTML = '';
        let buttonsContainer = document.querySelector('.buttons__container')
        buttonsContainer.innerHTML = '';
        searchInBag();
}

function loadSantaLookingInBag() {
    var target = event.target;
    if(target.classList.contains('polite__button')) {
        santaLookingForPresents()
    } 
}

window.addEventListener('click', loadSantaLookingInBag);