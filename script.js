'use-strict';
const input = document.querySelector('.input');
const displayTotal = document.querySelector('.result');
const submit = document.querySelector('.submit');

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
