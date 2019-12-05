let santaBagText = [
    'No głowę daję, że gdzieś tu był...',
    '...pewnie elfy robiły mi porządki',
    'chwileczkę, chwileczkę...',
    'O! Mam!'
];

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
    santaSays(santaBagText);
    setTimeout(santaFoundPresent, 14000);
}

window.addEventListener('click', loadSantaLookingInBag);