function loadDeer() {
    changeContainerBackground();
    changeDialogueColor();
    dialogue.innerHTML = 'Trąci nieco zachłannością, nie sądzisz?';
    buttonsContainer.innerHTML = '';
    dialogue.appendChild(wishes);
    wishes.innerHTML = 'Najlepsze życzenia świąteczne';
    let paragraph = document.createElement('p');
    wishes.appendChild(paragraph);
    paragraph.innerHTML = 'od Działu Telematyki PKM';
    
    
    clearAnimationContainer();
    buttonsContainer.innerHTML = '';
  
    let deer = document.createElement('div');
    deer.className = 'deer';
    cardContainer.appendChild(deer);
  
    let deerHead = document.createElement('div');
    deerHead.className = 'deer-head';
  
    let deerBody = document.createElement('div');
    deerBody.className = 'deer-body';
    deer.append(deerHead, deerBody);
  
    function createDeerHeadEl() {
      let horns = document.createElement('div');
      horns.className = 'horns';
  
      let ears = document.createElement('div');
      ears.className = 'ears';
  
      let deerEyes = document.createElement('div');
      deerEyes.className = 'deer-eyes';
  
      let deerNose = document.createElement('div');
      deerNose.className = 'deer-nose';
  
      let deerMouth = document.createElement('div');
      deerMouth.className = 'deer-mouth';
  
      deerHead.append(horns, ears, deerEyes, deerNose, deerMouth)
  
      function createDeerHorns() {
        let leftHorn = document.createElement('div');
        leftHorn.classList.add('horn', 'horn-left');
  
        let rightHorn = document.createElement('div');
        rightHorn.classList.add('horn', 'horn-right');
  
        horns.append(leftHorn, rightHorn);
  
        function createHornEl() {
          let hornLineOne = document.createElement('div');
          hornLineOne.classList.add('line' , 'line-one');
  
          let hornLineTwo = document.createElement('div');
          hornLineTwo.classList.add('line');
  
          let hornLineThree = document.createElement('div');
          hornLineThree.classList.add('line', 'line-three');
  
          leftHorn.append(hornLineOne, hornLineTwo, hornLineThree);
          
          let hornRightLineOne = document.createElement('div');
          hornRightLineOne.classList.add('line' , 'line-one');
  
          let hornRightLineTwo = document.createElement('div');
          hornRightLineTwo.classList.add('line');
  
          let hornRightLineThree = document.createElement('div');
          hornRightLineThree.classList.add('line', 'line-three');
          rightHorn.append(hornRightLineOne, hornRightLineTwo, hornRightLineThree)
        }
  
        createHornEl()
      }
  
      function createDeerEars() {
        let earLeft = document.createElement('div');
        earLeft.classList.add('ear', 'ear-left');
  
        let earRight = document.createElement('div');
        earRight.classList.add('ear', 'ear-right');
  
        ears.append(earLeft, earRight);
      }
  
      function createDeerEyes() {
        let eyeLeft = document.createElement('div');
        eyeLeft.classList.add('deer-eye', 'deer-eye-left');
  
        let eyeRight = document.createElement('div');
        eyeRight.classList.add('deer-eye', 'deer-eye-right');
  
        deerEyes.append(eyeLeft, eyeRight);
      }
  
      createDeerHorns();
      createDeerEars();
      createDeerEyes();
    }
  
    createDeerHeadEl();
  }