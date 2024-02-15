import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarLinkRef = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) {
      avatarLinkRef.current.value = '';
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarLinkRef.current.value,
    });
    avatarLinkRef.current.value = '';
  }
  return (
    <PopupWithForm
      name='avatar'
      title='Edit profile picture'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Save'
      onSubmit={handleSubmit}
    >
      <input
        type='url'
        name='link'
        placeholder='Picture link'
        className='popup__input popup__input_type_link'
        id='avatar-input'
        required
        ref={avatarLinkRef}
      />
      <span className='avatar-input-error popup__error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
