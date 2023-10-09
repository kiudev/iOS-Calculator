function getRealTime() {
   const date = new Date();
   const hour = date.getHours();
   const minutes = date.getMinutes();

   if (minutes >= 0 && minutes <= 9) {
      document.querySelector('.time').innerHTML = `${hour}:0${minutes}`;
   } else {
      document.querySelector('.time').innerHTML = `${hour}:${minutes}`;
   }
}

setInterval(getRealTime, 1000);

const result = document.querySelector('.result');
let calculation = '';

function updateCalculation(value) {
   calculation += value;
   result.innerHTML = calculation;
}

const numberButtons = document.querySelectorAll('.number');

for (let i = 0; i < numberButtons.length; i++) {
   numberButtons[i].addEventListener('click', event => {
      let buttonValue = event.target.textContent;
      updateCalculation(buttonValue);
   });
}

const arrayButtons = document.getElementsByTagName('button');
console.log(arrayButtons)

for (let i = 0; i < arrayButtons.length; i++) {
   const operatorButton = arrayButtons[i];
   const zeroButton = arrayButtons[i];

   switch (operatorButton) {
      case arrayButtons[2]:
         operatorButton.addEventListener('click', () => {
            calculation = '';
            result.innerHTML = 0;
         });
         break;

      case arrayButtons[3]:
         operatorButton.addEventListener('click', () => {
            calculation = calculation * -1;
            result.innerHTML = calculation;
         });
         break;

      case arrayButtons[4]:
         operatorButton.addEventListener('click', () => {
            calculation = calculation / 100;
            result.innerHTML = calculation;
         });
         break;

      case arrayButtons[5]:
         operatorButton.addEventListener('click', () => {
            updateCalculation(' / ');
         });
         break;

      case arrayButtons[9]:
         operatorButton.addEventListener('click', () => {
            updateCalculation(' * ');
         });
         break;

      case arrayButtons[13]:
         operatorButton.addEventListener('click', () => {
            updateCalculation(' - ');
         });
         break;

      case arrayButtons[17]:
         operatorButton.addEventListener('click', () => {
            updateCalculation(' + ');
         });
         break;

      case arrayButtons[18]:
         zeroButton.addEventListener('click', () => {
            updateCalculation(0);
         });
         break;

      case arrayButtons[19]:
         operatorButton.addEventListener('click', () => {
            updateCalculation('.');
         });
         break;

      case arrayButtons[20]:
         operatorButton.addEventListener('click', () => {
            calculation = eval(calculation);
            result.innerHTML = calculation;
         });
         break;

      default:
         result.innerHTML = '0';
         break;
   }
}

const increaseSize = document.querySelector('.plus-size-button');
const decreaseSize = document.querySelector('.minus-size-button');

let currentSize = '';

increaseSize.addEventListener('click', () => {
   currentSize = parseInt(getComputedStyle(result).fontSize);
   result.style.fontSize = (currentSize + 10) + 'px';
})

decreaseSize.addEventListener('click', () => {
   currentSize = parseInt(getComputedStyle(result).fontSize);
   result.style.fontSize = (currentSize - 10) + 'px';
})
