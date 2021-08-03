//Cores
let colors = ['#41A66C', '#BCBF50', '#8C7D32', '#EC9B69', '#BF5A36'];

//Botão geral
let button = document.getElementById('button');

button.addEventListener('click', function(){
  let randomColor = colors[Math.floor(Math.random() *colors.length)]
  let background = document.getElementById('background');
  background.style.background = randomColor;
});

//Botão específico
//Botao 1
let button1 = document.getElementById('cor1');

button1.addEventListener('click', function(){
  let backgroundColor = colors[0];
  background.style.background = backgroundColor;
});

//Botao 2
let button2 = document.getElementById('cor2');

button2.addEventListener('click', function(){
  let backgroundColor = colors[1];
  background.style.background = backgroundColor;
});

//Botao 3
let button3 = document.getElementById('cor3');

button3.addEventListener('click', function(){
  let backgroundColor = colors[2];
  background.style.background = backgroundColor;
});

//Botao 4
let button4 = document.getElementById('cor4');

button4.addEventListener('click', function(){
  let backgroundColor = colors[3];
  background.style.background = backgroundColor;
});

//Botao 5
let button5 = document.getElementById('cor5');

button5.addEventListener('click', function(){
  let backgroundColor = colors[4];
  background.style.background = backgroundColor;
});