const input1 = document.querySelector('#color1');
const input2 = document.querySelector('#color2');
const btnDirection = document.querySelector('#direction');
const result = document.querySelector('.result');

const directions = [
  'to right',
  'to top',
  'to bottom',
  'to left',
  'to right bottom',
  'to right top',
];

let color1 = '#ffffff';
let color2 = '#ffffff';
let direction = '';
let idx = 0;

input1.addEventListener('input', (e) => {
  color1 = e.target.value;
  changeBg();
});

input2.addEventListener('input', (e) => {
  color2 = e.target.value;
  changeBg();
});

btnDirection.addEventListener('click', function (e) {
  idx = idx < directions.length - 1 ? idx + 1 : 0;
  const newDirection = directions[idx];
  btnDirection.innerText = newDirection;
  changeBg(`${newDirection}, `);
});

const changeBg = (dir = '') => {
  const newBg = `linear-gradient(${dir}${color1}, ${color2})`;
  document.body.style.background = newBg;
  result.innerText = newBg;
};

const initializeBtnDir = () => {
  btnDirection.innerText = directions[0];
};

const initializer = () => {
  initializeBtnDir();
  input1.value = color1;
  input2.value = color2;
};

initializer();
