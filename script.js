const form = document.getElementById('form');
const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

convertBtn.addEventListener('click', () => {
  convertNumeralToRoman(number.value);
  console.log('Clicked');
});

number.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    convertNumeralToRoman(number.value);
    console.log('Clicked');
  }
});

const convertNumeralToRoman = (input) => {
  const value = Number(input);
  output.style.display = 'block';
  if (value <= 0) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  } else if (input === '') {
    output.textContent = 'Please enter a valid number';
    return;
  } else if (value >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
  }
};
