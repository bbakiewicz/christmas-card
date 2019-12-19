let santaBagText = [
  "No głowę daję, że gdzieś tu był...",
  "...pewnie elfy robiły porządki w worku",
  "O! Mam coś dla Ciebie!"
];

function santaLookingForPresents() {
  cardContainer.innerHTML = "";
  dialogue.innerHTML = "";
  let buttonsContainer = document.querySelector(".buttons__container");
  buttonsContainer.innerHTML = "";
  searchInBag();
}

function loadSantaLookingInBag() {
  var target = event.target;
  if (target.classList.contains("polite__button")) {
    santaLookingForPresents();
    setTimeout(santaFoundPresent, 12000);
    santaSays(santaBagText);
  } else if (target.classList.contains("rude__button")) {
    santaLookingForPresents();
    setTimeout(santaFoundStick, 12000);
    santaSays(santaBagText);
  }
  
}

window.addEventListener("click", loadSantaLookingInBag);
