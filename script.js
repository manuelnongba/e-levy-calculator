'use-strict';
const input = document.querySelector('.input');
const inputM = document.querySelector('.input-m');
const displayTotal = document.querySelector('.result');
const displayTotalMTN = document.querySelector('.result-m');
const resultElevy = document.querySelector('.result-elevy');
const resultElevyMTN = document.querySelector('.result-elevy-m');
const networkFee = document.querySelector('.network');
const networkMTN = document.querySelector('.network-m');
const inputType = document.querySelector('.form__input--type');
const vodafone = document.querySelector('.network__voda');
const mtn = document.querySelector('.network__mtn');
const resultField = document.querySelector('.total-display');
const resultFieldM = document.querySelector('.total-display-m');

displayTotal.textContent = `GH¢ 0`;
resultElevy.textContent = `GH¢ 0`;
networkFee.textContent = `GH¢ 0`;

input.addEventListener('input', function (e) {
  e.preventDefault();
  const amount = Number(input.value);
  if (amount > 100) {
    const elevy = amount * 0.015;
    const result = elevy + amount;
    displayTotal.textContent = `GH¢ ${result}`;
    resultElevy.textContent = `GH¢ ${elevy}`;
  } else {
    displayTotal.textContent = `GH¢ ${amount}`;
    resultElevy.textContent = 0;
  }
});

inputType.addEventListener('change', function (e) {
  e.preventDefault();
  if (inputType.value === 'vodafone') {
    vodafone.classList.remove('hidden');
    // mtn.classList.add('hidden')
    inputType.style.border = '5px solid white';
    input.style.border = '5px solid white';
    resultField.style.border = '5px solid white';
    document.body.style.backgroundColor = 'rgb(228, 44, 44)';
  }

  if (inputType.value === 'MTN') {
    vodafone.classList.remove('hidden');
    // vodafone.classList.add('hidden');
    inputType.style.border = '5px solid rgb(10, 66, 110)';
    input.style.border = '5px solid rgb(10, 66, 110)';
    resultField.style.border = '5px solid rgb(10, 66, 110)';
    document.body.style.backgroundColor = 'rgb(234, 206, 9)';
  }
  console.log(inputType.value);

  if (inputType.value === 'select')
    document.body.backgroundColor = 'rgb(159, 154, 154)';
});
