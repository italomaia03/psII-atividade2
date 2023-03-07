let x = 0;

while (x <= 10) {
  const p = document.createElement('p');
  p.innerText = x;
  x++;
  document.querySelector('main').appendChild(p);
}
