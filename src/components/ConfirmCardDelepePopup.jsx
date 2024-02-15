import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmCardDeletePopup({
  isOpen,
  onClose,
  onDeleteCard,
  selectedCardId,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(selectedCardId);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name='confirm'
      title='Are you sure?'
      buttonText='Yes'
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmCardDeletePopup;
