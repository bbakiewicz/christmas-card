var container = document.querySelector('.container');

function santaIntro() {
    var cardContainer = document.querySelector('#animation__container');

    function changeDialogueColor() {
        dialogue.style.color = '#000';
        dialogue.innerHTML = '';
    }

    function changeContainerBackground() {
        
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

        var buckle = document.createElement('div');
        buckle.className = 'buckle';

        var bag = document.createElement('div');
        bag.className = 'bag';

        santa.append(head, body, belt, bag);
        belt.appendChild(buckle)

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
            rightHand.className = 'hand-right';

            var jacketButton = document.createElement('div');
            jacketButton.className = 'jacket__button';

            body.append(leftHand, jacketButton, rightHand);

            function createLeftHand() {
                var leftHandGlove = document.createElement('div');
                leftHandGlove.className = 'hand-left-glove';

                var bagElement = document.createElement('div');
                bagElement.className = 'bag-element';

                leftHand.append(leftHandGlove, bagElement);

            }

            function createRightHand() {
                var rightHandArm = document.createElement('div');
                rightHandArm.className = 'hand-right-arm';
                var handRightWhite = document.createElement('div');
                handRightWhite.className = 'hand-right-white';

                rightHand.append(handRightWhite, rightHandArm)
            }

            createLeftHand();
            createRightHand();
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

function santaSays() {
    let santaText = [
        'Podejdź bliżej...',
         'żebym Cię dobrze widział...',
        '...mów no zaraz smyku...',
        '...byłeś grzeczny w tym roku?'
    ];

    var idx = -1;

    function getSantaText() {
        ++idx;
        dialogue.innerHTML = `${santaText[idx]}`;
        if (idx >= (santaText.length -1)) { clearInterval(santaDialogueInterval)};
    }
    
    var santaDialogueInterval = setInterval(getSantaText, 3000);
    
}

setTimeout(santaSays, 11000);