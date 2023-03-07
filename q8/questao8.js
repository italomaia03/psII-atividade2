const h2 = document.createElement('h2');
document.querySelector('main').appendChild(h2);
const botao = document.querySelector('button');
const input = document.querySelector('input');

function verificaNome(nome) {
  if (nome === 'Ítalo') {
    h2.innerText = `Olá, ${nome}`;
  }
}

input.addEventListener(
  'focusout',
  () => {
    h2.innerText = '';
    verificaNome(input.value);
  },
  false
);
