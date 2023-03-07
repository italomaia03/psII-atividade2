const idade = document.querySelector('#idade');
const cnh = document.querySelector('#cnh');
const botao = document.querySelector('button');
const h2 = document.createElement('h2');

function verificarPermissaoDirigir(idade, cnh) {
  if (idade >= 18 && !cnh) {
    h2.innerText = 'Maior sem CNH';
  } else if (idade >= 18 && cnh) {
    h2.innerText = 'Motorista';
  } else if (idade < 18 && !cnh) {
    h2.innerText = 'Menor sem habilitação';
  }
  document.querySelector('main').appendChild(h2);
}

botao.addEventListener(
  'click',
  () => {
    verificarPermissaoDirigir(Number(idade.value), cnh.checked);
  },
  false
);

idade.addEventListener('focus', () => {
  idade.value = '';
  cnh.checked = false;
});

cnh.addEventListener('change', () => {
  if (Number(idade.value) < 18) {
    cnh.checked = false;
  }
});
