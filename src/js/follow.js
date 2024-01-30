// Modal follow

(() => {
  const refs = {
    openModalBtn: document.querySelector('[follow-modal-open]'),
    closeModalBtn: document.querySelector('[follow-modal-close]'),
    modal: document.querySelector('[follow-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
