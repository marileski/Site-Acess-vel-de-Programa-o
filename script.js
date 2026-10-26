let currentFontSize = 16;

function changeFontSize(delta) {
  currentFontSize += delta;
  if (currentFontSize < 12) currentFontSize = 12;
  if (currentFontSize > 24) currentFontSize = 24;
  document.documentElement.style.setProperty('--font-size', currentFontSize + 'px');
}

// Alternar Modo Escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Botão Voltar ao Topo
const btnTop = document.getElementById('btn-top');

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
