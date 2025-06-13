let contador = 0;

const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('botao');
const botaoResetar = document.getElementById('resetar');

botao.addEventListener('click', () => {
  contador++;
  contadorElemento.textContent = contador;
});

botaoResetar.addEventListener('click', () => {
  contador = 0;
  contadorElemento.textContent = contador;
});
