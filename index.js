const sliderElement = document.querySelector('.slider');
const arrowLeftElement = document.querySelector('.arrow.left');
const arrowRightElement = document.querySelector('.arrow.right');

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
    arrowRightElement.disabled = true;

    setTimeout(() => {
       
        sliderElement.style.transition = "none";
        sliderElement.style.transform = 'translate(0, 0)';

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
        newSlotElement.textContent = testArray[newSlotIndex];
        arrowRightElement.disabled = false;
    }, 400);    
}

const towardsLeft = () => {    
    sliderElement.style.transition = ".4s ease";
    sliderElement.style.transform = 'translate(33.33%, 0)';
    arrowLeftElement.disabled = true;

    setTimeout(() => {
        sliderElement.style.transition = "none";
        sliderElement.style.transform = 'translate(0, 0)';

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

        newSlotElement.textContent = testArray[newSlotIndex]
        arrowLeftElement.disabled = false;
    }, 400);
}

initialSlider();

arrowRightElement.addEventListener("click", towardsRight);
arrowLeftElement.addEventListener("click", towardsLeft);
