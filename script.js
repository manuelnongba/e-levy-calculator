'use-strict';
const input = document.querySelector('.input');
const inputM = document.querySelector('.inputm');
const displayTotal = document.querySelector('.result');
const submit = document.querySelector('.submit');
const inputType = document.querySelector('.form__input--type');
const container = document.querySelector('.form__row');
const vodafone = document.querySelector('.network__voda');
const mtn = document.querySelector('.network__mtn');
const resultField = document.querySelector('.total-display');
const resultFieldM = document.querySelector('.total-displaym');

console.log(inputType.value);
displayTotal.textContent = `GH¢ 0`;

input.addEventListener('input', function (e) {
  e.preventDefault();
  const amount = Number(document.querySelector('.input').value);
  if (amount >= 100) {
    const result = amount * 0.015 + amount;
    displayTotal.textContent = `GH¢ ${result}`;
  } else {
    displayTotal.textContent = `GH¢ ${amount}`;
  }
});

inputType.addEventListener('change', function (e) {
  e.preventDefault();
  if (inputType.value === 'vodafone') {
    vodafone.classList.remove('hidden');
    mtn.classList.add('hidden');
    inputType.style.border = '5px solid rgb(208, 52, 52)';
    input.style.border = '5px solid rgb(208, 52, 52)';
    resultField.style.border = '1px solid rgb(208, 52, 52)';
  }

  if (inputType.value === 'MTN') {
    mtn.classList.remove('hidden');
    vodafone.classList.add('hidden');
    inputType.style.border = '5px solid rgb(215, 215, 76)';
    inputM.style.border = '5px solid rgb(215, 215, 76)';
    resultFieldM.style.border = '1px solid rgb(215, 215, 76)';
  }
});
