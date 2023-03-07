const p = document.createElement('p');
for (let i = 100; i >= 50; i--) {
  p.innerText += ` ${i} `;
}
document.querySelector('main').appendChild(p);
