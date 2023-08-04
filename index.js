const sliderElement = document.querySelector('.slider');
const arrowLeftElement = document.querySelector('.arrow.left');
const arrowRightElement = document.querySelector('.arrow.right');


// let sliderIndex = 0;
// let isReversed = false;
const imagesArray = [
    "https://www.smurf.com/characters-smurfs/papa.png",
    "https://www.smurf.com/characters-smurfs/handy.png",
    "https://www.smurf.com/characters-smurfs/smurfette.png",
    "https://www.smurf.com/characters-smurfs/hefty.png",
    "https://www.smurf.com/characters-smurfs/brainy.png",
    "https://www.smurf.com/characters-smurfs/jokey.png",
    "https://www.smurf.com/characters-smurfs/farmer.png",
    "https://www.smurf.com/characters-smurfs/gargamel-min.png",
];

const testArray = [1, 2, 3, 4, 5];

const totalNumberOfSlides = testArray.length;
let currentSlotNumber = 1;

const initialSlider = () => {
    currentSlotNumber = 1;
    for (let index = 0; index < 3; index++) {
        const singleSlotElement = document.createElement('div');
        singleSlotElement.setAttribute('class', 'single-slot');
        let slideIndex;
        if (index === 0) {
            slideIndex = testArray.length - 1;
        } else {
            slideIndex = index - 1;
        }
        singleSlotElement.textContent = testArray[slideIndex];
        sliderElement.appendChild(singleSlotElement);
    }
}
const towardsRight = () => {
    sliderElement.style.transition = ".4s ease";
    sliderElement.style.transform = 'translate(-33.33%, 0)';

    setTimeout(() => {
        sliderElement.firstChild.remove();
        const newSlotElement = document.createElement('div');
        newSlotElement.setAttribute('class', 'single-slot');
        sliderElement.appendChild(newSlotElement);
        let newSlotIndex;
        // currentSlotNumber adjustment
        if (currentSlotNumber < testArray.length) {
            currentSlotNumber += 1;
        } else {
            currentSlotNumber = 1
        }
        // newSlotIndex adjustment
        if (currentSlotNumber < testArray.length) {
            newSlotIndex = currentSlotNumber
        } else {
            newSlotIndex = 0
        }
        newSlotElement.textContent = testArray[newSlotIndex]
        sliderElement.style.transition = "none";
        sliderElement.style.transform = 'translate(0, 0)';
    }, 400);



    // clearTimeout(slidingRight);

}

const towardsLeft = () => {
    sliderElement.style.transition = ".4s ease";
    sliderElement.style.transform = 'translate(33.33%, 0)';

    setTimeout(() => {

        sliderElement.lastChild.remove();
        const newSlotElement = document.createElement('div');
        newSlotElement.setAttribute('class', 'single-slot');


        sliderElement.insertBefore(newSlotElement, sliderElement.firstChild);
        let newSlotIndex;
        // currentSlotNumber adjustment
        if (currentSlotNumber > 1) {
            currentSlotNumber -= 1;
        } else {
            currentSlotNumber = testArray.length
        }
        // newSlotIndex adjustment
        if (currentSlotNumber > 1) {
            newSlotIndex = currentSlotNumber - 2
        } else {
            newSlotIndex = testArray.length - 1
        }
        sliderElement.style.transition = "none";
        sliderElement.style.transform = 'translate(0, 0)';
        newSlotElement.textContent = testArray[newSlotIndex]
    }, 400);
}


initialSlider();
arrowRightElement.addEventListener("click", () => {
    towardsRight();
});
arrowLeftElement.addEventListener("click", () => {
    towardsLeft();
});
