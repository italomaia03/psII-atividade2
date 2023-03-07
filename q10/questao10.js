const velocidade = document.querySelector('input');
const h2 = document.createElement('h2');
document.querySelector('main').appendChild(h2);

function verificarVelocidade(velocidade) {
  if (velocidade > 80) {
    h2.innerText = 'Acima da velocidade permitida.';
  } else {
    h2.innerText = 'Velocidade dentro do limite';
  }
}

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  verificarVelocidade(Number(velocidade.value));
});
