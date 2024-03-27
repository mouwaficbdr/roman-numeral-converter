const form = document.getElementById('form');
const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumeral = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

convertBtn.addEventListener('click', () => {
  output.classList.remove('error');
  output.textContent = convertToRoman(number.value);
});

number.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    output.classList.remove('error');
    output.textContent = convertToRoman(number.value);
  }
});

const convertToRoman = (input) => {
  const value = Number(input);
  output.style.display = 'block';
  //ERROR CASES
  if (value < 0) {
    output.classList.add('error');
    return 'Please enter a number greater than or equal to 1';
  } else if (input === '') {
    output.classList.add('error');
    return 'Please enter a valid number';
  } else if (value >= 4000) {
    output.classList.add('error');
    return 'Please enter a number less than or equal to 3999';
  } else if (value === 0) {
    return '';
  } else {
    //ROMAN CONVERSION
    for (let i = 0; i < romanNumeral.length; i++) {
      if (value >= romanNumeral[i][1]) {
        return romanNumeral[i][0] + convertToRoman(value - romanNumeral[i][1]);
      }
    }
  }
};
