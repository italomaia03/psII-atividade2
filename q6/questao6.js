const texto = 'Texto - String';
const numero = 1 + ' - Number';
const booleano = true + ' - Boolean';

const section = document.querySelectorAll('section');
for (let i = 0; i < section.length; i++) {
  section[i].appendChild(document.createElement('h2'));
}

const h2 = document.querySelectorAll('section h2');

h2[0].innerText = texto;
h2[1].innerText = numero;
h2[2].innerText = booleano;
