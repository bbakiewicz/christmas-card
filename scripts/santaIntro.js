function santaIntro() {
    var cardContainer = document.querySelector('#animation__container');

    function changeDialogueColor() {
        var dialogue = document.querySelector('.dialogue');
        dialogue.style.color = '#000';
        dialogue.innerHTML = 'Teraz jak na spowiedzi. Jak było z tą grzecznością?'
    }

    function changeContainerBackground() {
        var container = document.querySelector('.container');
        container.style.backgroundColor = '#fff';
    }

    function clearAnimationContainer() {
        cardContainer.innerHTML='';
    }

    function createSanta() {
        var santa = document.createElement('div');
        santa.className = 'santa';
        cardContainer.appendChild(santa);

        var head = document.createElement('div');
        head.classList.add('shake-head');
        
        var body = document.createElement('div');
        body.className = 'santa__body';

        var belt = document.createElement('div');
        belt.className = 'belt';

        var bag = document.createElement('div');
        bag.className = 'bag';

        santa.append(head, body, belt, bag);
    

        function createHat() {
            var hat = document.createElement('div');
            hat.className = 'hat';
            head.appendChild(hat);

            var hatRedEl = document.createElement('div');
            hatRedEl.className = 'hat-red';

            var hatWhiteEl = document.createElement('div');
            hatWhiteEl.className = 'hat-white';

            var hatPompon = document.createElement('div');
            hatPompon.className = 'hat-pompon';

            hat.append(hatRedEl, hatWhiteEl, hatPompon);
        }
        

        function createFace() {
            var face = document.createElement('div');
            face.className = 'face';
            head.appendChild(face);

            var eyes = document.createElement('div');
            eyes.className = 'eyes';

            var nose = document.createElement('div');
            nose.className = 'nose';

            var beard = document.createElement('div');
            beard.className = 'beard';

            var mouth = document.createElement('div');
            mouth.className = 'mouth';

            face.append(eyes, nose, beard, mouth)

            var leftEye = document.createElement('div');
            var rightEye = document.createElement('div');

            leftEye.classList.add('eye', 'eye-left');
            rightEye.classList.add('eye', 'eye-right');

            eyes.append(leftEye, rightEye);
        }

        function createBody() {
            var leftHand = document.createElement('div');
            leftHand.className = 'hand-left';

            var rightHand = document.createElement('div');
            rightHand.className = 'hand-rigth';

            var jacketButton = document.createElement('div');
            jacketButton.className = 'button';

            body.append(leftHand, jacketButton, rightHand);

        }

        createHat();
        createFace();
        createBody();
    }

    changeDialogueColor();
    changeContainerBackground();
    clearAnimationContainer();
    createSanta();
}

setTimeout(santaIntro, 10000)
