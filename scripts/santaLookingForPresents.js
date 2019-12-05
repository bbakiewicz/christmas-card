let santaBagText = [
  "No głowę daję, że gdzieś tu był...",
  "...pewnie elfy robiły mi porządki",
  "chwileczkę, chwileczkę...",
  "O! Mam!"
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
    setTimeout(santaFoundPresent, 14000);
  } else if (target.classList.contains("rude__button")) {
    santaLookingForPresents();
    setTimeout(santaFoundStick, 14000);
  }
  santaSays(santaBagText);
}

window.addEventListener("click", loadSantaLookingInBag);
