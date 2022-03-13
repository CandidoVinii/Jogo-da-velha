const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

const getGrid = document.querySelector('.grid');
const player = document.querySelector('#player');
const btnReset = document.querySelector('#reset')

function createDiv () {
  for (let i = 0; i <= 9; i += 1){
    let criaDiv = document.createElement('div');
    criaDiv.className = 'celula';
    criaDiv.id = i;
    criaDiv.addEventListener('click', game);
    getGrid.appendChild(criaDiv);
  }
}


