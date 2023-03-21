function openPopup(popup) {
  popup.classList.add('popup_opened');
  setPopupEsc();
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removePopupEsc();
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}
function setPopupEsc() {
  document.addEventListener('keydown', closePopupEsc);
}
function removePopupEsc() {
  document.removeEventListener('keydown', closePopupEsc);
}
export {openPopup, closePopup, closePopupEsc, setPopupEsc, removePopupEsc}
