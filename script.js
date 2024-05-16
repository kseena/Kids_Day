
const box = document.getElementById('box');
const numberInput = document.getElementById('numberInput');
var image = document.getElementById("image");
var newImagePath = "open_box.jpg";
var isSoundPlayed = false; 

function playErrorSound() {
    if (!isSoundPlayed) { 
        const errorSound = new Audio("error.mp3");
        errorSound.play();
        isSoundPlayed = true; 
        setTimeout(() => { isSoundPlayed = false; }, 1000); 
    }
}

function playOpenBoxSound() {
    if (!isSoundPlayed) { 
        const openBoxSound = new Audio("open_box.mp3");
        openBoxSound.play();
        isSoundPlayed = true; 
        setTimeout(() => { isSoundPlayed = false; }, 1000); 
    }
}

box.addEventListener('click', () => {
    const guessedNumber = parseInt(numberInput.value);
    if (!isNaN(guessedNumber)) {
        if (guessedNumber === 42) {
            playOpenBoxSound();
            image.src = newImagePath;
        } else {
            playErrorSound();
        }
    }
});
