let gifts = [
  { url: "../img/gifts/champagne.svg", text: "Dyżur sylwestrowy w pracy" },
  { url: "../img/gifts/snow.svg", text: "Złoty szpadel na akcję zima" },
  {
    url: "../img/gifts/fire-extinguisher.svg",
    text: "Order kuchennego strażaka"
  },
  { url: "../img/gifts/ticket.svg", text: "Bilet na PKM do Kościerzyny" }
];

var giftIndex = Math.floor(Math.random() * gifts.length);
var gift = document.createElement("div");

function createBackgroundForGift() {
  cardContainer.innerHTML = "";
  gift.className = "random__gift";
  cardContainer.appendChild(gift);
  dialogue.style.color = "#fff";
}

function getRandomGift() {
  createBackgroundForGift();
  gift.style.backgroundImage = `url(${gifts[giftIndex].url})`;
  
  function setGiftText() {
    dialogue.innerHTML = gifts[giftIndex].text;
  }

  setTimeout(setGiftText, 2000);
}

function getStick() {
  createBackgroundForGift();

  function setStickText() {
    dialogue.innerHTML = "Dostajesz magiczną rózgę i popraw się";
  }
  gift.style.backgroundImage = 'url("../img/magic-wand.svg")';

  setTimeout(setStickText, 2000);
}
