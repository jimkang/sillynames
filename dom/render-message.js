function renderMessage({ targetId, message }) {
  var slate = document.getElementById(targetId);
  slate.classList.remove('visible');
  slate.classList.add('hidden');

  setTimeout(reveal, 1000);

  function reveal() {
    slate.textContent = message;
    slate.classList.remove('hidden');
    slate.classList.add('visible');
  }
}

module.exports = renderMessage;
