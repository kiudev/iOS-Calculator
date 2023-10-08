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

const numberButtons = document.querySelectorAll('.number');
const result = document.querySelector('.result');
let calculation = '';

function updateCalculation(value) {
   calculation += value;
   result.innerHTML = calculation;
}

for (let i = 0; i < numberButtons.length; i++) {
   numberButtons[i].addEventListener('click', (event) => {
      let buttonValue = event.target.textContent;
      updateCalculation(buttonValue);
   })
   console.log(numberButtons[i]);
}



