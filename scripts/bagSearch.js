function searchInBag() {
    let elf = document.createElement('div');
    elf.className = 'elf';
    let bagSearch = document.createElement('div');
    

    cardContainer.append(elf, bagSearch);

    function createElf() {
        let elfEyes = document.createElement('div');
        elfEyes.className = 'elf-eyes';

        elf.appendChild(elfEyes);

        let leftElfEye = document.createElement('div');
        leftElfEye.className = 'elf-eye-left';

        let rightElfEye = document.createElement('div');
        rightElfEye.className = 'elf-eye-right';

        elfEyes.append(leftElfEye, rightElfEye);
    }

    let legs = document.createElement('div');
    legs.className = 'legs';
    
    let bag = document.createElement('div');
    bag.className = 'santas__bag'

    bagSearch.append(legs, bag);

    function createBag() {
        let bagCord = document.createElement('div');
        bagCord.className = 'bag-cord';
    
        let bagUpper = document.createElement('div');
        bagUpper.className = 'bag-upper';
    
        let presentBag = document.createElement('div');
        presentBag.className = 'present-bag';
    
        bag.append(bagCord, bagUpper, presentBag);
    }
    
    createBag();
    createElf()
}