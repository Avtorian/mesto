const avatarNameSelector = '.profile__avatar-name';
const avatarJobSelector = '.profile__avatar-job';
const templateSelector = "#element";
const cardListSelector = '.elements__items';
const imagePopupSelector = '.imagePopup';
const profilePopupSelector = ".profilePopup";
const cardPopupSelector = '.cardPopup';
const profilePopup = document.querySelector(profilePopupSelector);
const profile = document.querySelector('.profile');
const profilePopupOpen = profile.querySelector('.profile__edit-button');
const cardPopupOpen = profile.querySelector('.profile__add-button');
const profilePopupForm = profilePopup.querySelector('.popup__input');
const nameInput = profilePopupForm.querySelector('.popup__input-text_type_name');
const jobInput = profilePopupForm.querySelector('.popup__input-text_type_job');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const settings = {
  formSelector: '.popup__input',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_active',
  inputSet: '.popup__input-set',
};

export {
  initialCards,
  settings,
  avatarNameSelector,
  avatarJobSelector,
  profilePopupSelector,
  imagePopupSelector,
  templateSelector,
  cardListSelector,
  profilePopupOpen,
  cardPopupOpen,
  nameInput,
  jobInput,
  cardPopupSelector
};

