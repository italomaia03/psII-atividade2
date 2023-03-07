const resultado = document.querySelector('#resultado');

function verificar() {
  let numero = document.querySelector('input').value;
  resultado.innerText = '';

  switch (numero) {
    case '1':
      resultado.innerText = 'Opção inválida';
      break;

    case '2':
      resultado.innerText = 'Primo';
      break;

    default:
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          resultado.innerText = 'Não é primo';
          break;
        } else {
          resultado.innerText = 'Primo';
        }
      }
      break;
  }
}

function limpar() {
  document.querySelector('form').reset();
}

const verifica = document.querySelector('#verifica');
const limpaCampo = document.querySelector('#reseta');

verifica.addEventListener('click', verificar, false);
limpaCampo.addEventListener('click', limpar, false);
