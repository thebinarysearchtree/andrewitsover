const form = document.getElementById('form');
form.addEventListener('submit', () => {
  localStorage.setItem('form', 'true');
});