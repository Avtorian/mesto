import { Card } from "./Card.js";
import { initialCards } from './cards.js';
import { FormValidator } from "./FormValidator.js";
import { openPopup } from "./utils/utils.js";
import { imagePopup, popupPhoto, popupText } from "./utils/constants.js";

const profile = document.querySelector('.profile');
const avatarName = profile.querySelector('.profile__avatar-name');
const avatarJob = profile.querySelector('.profile__avatar-job');
const elementsContainer = document.querySelector('.elements__items');
//Попапы
const profilePopup = document.querySelector('.profilePopup');
const cardPopup = document.querySelector('.cardPopup');
//Кнопки закрытия попапов
const profilePopupClose = profilePopup.querySelector('.popup__close');
const cardPopupClose = cardPopup.querySelector('.popup__close');
const imagePopupClose = imagePopup.querySelector('.popup__close');
//Кнопки открытия попапов
const profilePopupOpen = profile.querySelector('.profile__edit-button');
const cardPopupOpen = profile.querySelector('.profile__add-button');
//Отправка формы
const profilePopupForm = profilePopup.querySelector('.popup__input');
const cardPopupForm = cardPopup.querySelector('.popup__input');
//Поля ввода формы профиля
const nameInput = profilePopupForm.querySelector('.popup__input-text_type_name');
const jobInput = profilePopupForm.querySelector('.popup__input-text_type_job');
//Темплейт
const mestoTitle = cardPopupForm.querySelector('.popup__input-text_type_title');
const mestoLink = cardPopupForm.querySelector('.popup__input-text_type_link');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removePopupEsc();
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
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

function fillForm() {
  nameInput.value = avatarName.textContent;
  jobInput.value = avatarJob.textContent;
  openPopup(profilePopup);
}

//функции отправки формы профиля
function submitFormProfile(evt) {
  evt.preventDefault();
  avatarName.textContent = nameInput.value;
  avatarJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
//функция отправки формы карточки
function submitFormCard(evt) {
  evt.preventDefault();
  const item = {
    name: mestoTitle.value,
    link: mestoLink.value
  };
  mestoTitle.value = '';
  mestoLink.value = '';
  generateCard(item);
  closePopup(cardPopup);
}
//обработчики открытия попапов
profilePopupOpen.addEventListener('click', fillForm);
cardPopupOpen.addEventListener('click', () => openPopup(cardPopup));

//обработчики закрытия попапов
profilePopup.addEventListener('click', closePopupOverlay);
cardPopup.addEventListener('click', closePopupOverlay);
imagePopup.addEventListener('click', closePopupOverlay);

profilePopupClose.addEventListener('click', () => closePopup(profilePopup));
cardPopupClose.addEventListener('click', () => closePopup(cardPopup));
imagePopupClose.addEventListener('click', () => closePopup(imagePopup));
//обработчики отправки формы

profilePopupForm.addEventListener('submit', submitFormProfile);
cardPopupForm.addEventListener('submit', submitFormCard);
//Выгрузка карточек из массива

initialCards.forEach((item) => {
  generateCard(item);
});

function generateCard(item) {
  const element = new Card(item, "#element");
  elementsContainer.prepend(element.createCard());
}

const settings = {
  formSelector: '.popup__input',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_active',
  inputSet: '.popup__input-set',
};

const profilePopupValid = new FormValidator(settings, profilePopup);
profilePopupValid.enableValidation();
const cardPopupValid = new FormValidator(settings, cardPopup);
cardPopupValid.enableValidation();
