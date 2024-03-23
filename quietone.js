const form = localStorage.getItem('form');
if (form) {
  localStorage.removeItem('form');
  const element = document.createElement('p');
  element.innerText = 'Thanks for the message!';
  element.classList.add('toast');
  document.body.append(element);
  setTimeout(() => element.remove(), 3000);
}