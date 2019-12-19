function santaSleighRide() {
  var container = document.querySelector(".container");
  container.style.background =
    "radial-gradient(circle, rgba(0,106,146,1) 0%, rgba(30,65,102,1) 100%)";

  var cardContainer = document.querySelector("#animation__container");
  var moon = document.createElement("div");
  moon.className = "moon";
  cardContainer.appendChild(moon);

  var santaSleigh = document.createElement("div");
  santaSleigh.className = "sleigh";
  cardContainer.appendChild(santaSleigh);

  var dialogue = document.querySelector(".dialogue");
  dialogue.style.color = "#fff";

  function hoHoScream() {
    let dialogue = document.querySelector(".dialogue");
    dialogue.innerHTML = "Ho! Ho! Ho!";
  }

  setTimeout(hoHoScream, 2500);
}
