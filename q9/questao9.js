const bases = [2, 3, 18];

for (let i = 0; i < bases.length; i++) {
  let h2 = document.createElement('h2');
  h2.innerText = `${bases[i]}² = ${Math.pow(bases[i], 2)}`;
  document.querySelector('main').appendChild(h2);
}
