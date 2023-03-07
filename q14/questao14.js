for (let i = 0; i <= 50; i++) {
  const p = document.createElement('p');
  if (i % 2 === 0) {
    p.innerText = `${i} - par`;
  } else {
    p.innerText = `${i} - ímpar`;
  }
  document.querySelector('main').appendChild(p);
}
