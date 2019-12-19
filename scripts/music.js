var backgroundMusic = new Audio("./music/jingle-bells.mp3");
backgroundMusic.muted = '';
let redStripe = document.createElement('div');
var musicIcon = document.querySelector('.music-icon');
musicIcon.appendChild(redStripe);

window.onload = pauseMusic();


function pauseMusic() {
    backgroundMusic.pause()
    redStripe.classList.add('red-stripe');
}

function playMusic() {
    backgroundMusic.play();
    redStripe.classList.remove('red-stripe');
}

function togglePlay() {
  var target = event.target;

  return target.classList.contains("music-icon") && backgroundMusic.play
    ? pauseMusic()
    : playMusic();
}

musicIcon.addEventListener("click", togglePlay);
