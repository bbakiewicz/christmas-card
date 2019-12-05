function santaSays(text) {

    var idx = -1;

    function getSantaText() {
        ++idx;
        dialogue.innerHTML = `${text[idx]}`;
        if (idx >= (text.length -1)) { clearInterval(santaDialogueInterval)};
    }
    
    var santaDialogueInterval = setInterval(getSantaText, 3000);
}