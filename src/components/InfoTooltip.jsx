import React from 'react';

import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip({ isOpen, onClose, isSuccessful }) {
  return (
    <div className={`popup popup_type_info ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          type='button'
          aria-label='закрыть'
          className='popup__close'
          onClick={onClose}
        ></button>
        <div className='popup__container_type_info'>
          <img
            src={isSuccessful ? success : fail}
            alt='Лого'
            className='popup__icon'
          ></img>
          <h2 className='popup__message'>
            {isSuccessful
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
