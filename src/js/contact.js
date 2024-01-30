// Modal contact

(() => {
  const refs = {
    openModalBtn: document.querySelector('[contact-modal-open]'),
    openStoreModalBtn: document.querySelector('[store-contact-modal-open]'),
    closeModalBtn: document.querySelector('[contact-modal-close]'),
    modal: document.querySelector('[contact-data-modal]'),
    thankYouModal: document.querySelector('[thank-data-modal]'),
    contactForm: document.querySelector('#contact-form'), // added form reference
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openStoreModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.contactForm.addEventListener('submit', handleFormSubmit);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    // Validate form data here (you can use the pattern attribute for basic validation)
    const isValid = validateFormData();
    if (isValid) {
      // If the form is valid, close the contact modal and open the thank you modal
      toggleModal();
      refs.thankYouModal.classList.remove('is-hidden');
    }
  }
  function validateFormData() {
    // Implement your validation logic here
    // You can use the pattern attribute for basic validation
    // Add red highlighting for validation errors
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('email');
    let isValid = true;
    if (!nameInput.checkValidity()) {
      isValid = false;
      nameInput.classList.add('is-invalid');
    } else {
      nameInput.classList.remove('is-invalid');
    }
    if (!emailInput.checkValidity()) {
      isValid = false;
      emailInput.classList.add('is-invalid');
    } else {
      emailInput.classList.remove('is-invalid');
    }
    return isValid;
  }
})();
