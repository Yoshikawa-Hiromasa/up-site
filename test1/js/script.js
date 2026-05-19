const changeButton = document.getElementById('changeButton');
const message = document.getElementById('message');

changeButton.addEventListener('click', () => {
  message.textContent = 'JavaScriptが正しく読み込まれました！';
});