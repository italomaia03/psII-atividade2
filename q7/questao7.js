const autorizacao = document.querySelector('#resultado');
const resultado = document.createElement('h2');
autorizacao.appendChild(resultado);

function autorizar() {
  let idade = document.querySelector('input').value;
  resultado.innerText = '';

  if (idade >= 18) {
    resultado.innerText = 'Entrada permitida';
    console.log(idade);
  } else {
    resultado.innerText = 'Entrada não permitida';
    console.log(idade);
  }
}

function limpar() {
  document.querySelector('form').reset();
}

const submicao = document.querySelector('#autoriza');
const limpaCampo = document.querySelector('#limpa');

submicao.addEventListener('click', autorizar, false);
limpaCampo.addEventListener('click', limpar, false);
