const avatarNameSelector = '.profile__avatar-name';
const avatarJobSelector = '.profile__avatar-job';
const avatarSelector = '.profile__avatar';
const templateSelector = "#element";
const cardListSelector = '.elements__items';
const imagePopupSelector = '.imagePopup';
const profilePopupSelector = ".profilePopup";
const profileAvatarPopupSelector = ".avatarPopup";
const cardDeletePopupSelector = ".deletePopup";
const cardPopupSelector = '.cardPopup';
const profilePopup = document.querySelector(profilePopupSelector);
const profile = document.querySelector('.profile');
const avatarPopupEdit = profile.querySelector('.profile__avatar-edit');
const profilePopupOpen = profile.querySelector('.profile__edit-button');
const cardPopupOpen = profile.querySelector('.profile__add-button');
const profilePopupForm = profilePopup.querySelector('.popup__input');
const nameInput = profilePopupForm.querySelector('.popup__input-text_type_name');
const jobInput = profilePopupForm.querySelector('.popup__input-text_type_job');

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
  cardPopupSelector,
  profileAvatarPopupSelector,
  cardDeletePopupSelector,
  avatarPopupEdit,
  avatarSelector
};

