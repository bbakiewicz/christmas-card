let gifts = [
    {url: '../img/gifts/champagne.svg', text: 'Dyżur sylwestrowy w pracy'},
    {url: '../img/gifts/snow.svg', text: 'Złoty szpadel na akcję zima'},
    {url: '../img/gifts/fire-extinguisher.svg', text: 'Order kuchennego strażaka'},
    {url: '../img/gifts/ticket.svg', text: 'Bilet na PKM do Kościerzyny'}
]

var giftIndex = (Math.floor(Math.random() * gifts.length));

function getRandomGift() {

    cardContainer.innerHTML = '';

    var gift = document.createElement('div');
        gift.className = 'random__gift'
        cardContainer.appendChild(gift);
        gift.style.backgroundImage = `url(${gifts[giftIndex].url})`;

        function setGiftText() {
            dialogue.innerHTML = gifts[giftIndex].text;
            dialogue.style.color = '#fff';
        }

        setTimeout(setGiftText, 3000);
}

