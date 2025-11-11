// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // --- Modal ---
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');

  // Abrir modal
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  // Cerrar modal con el botón de cierre
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
