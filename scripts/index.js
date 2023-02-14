const profile = document.querySelector('.profile');
const avatarName = profile.querySelector('.profile__avatar-name');
const avatarJob = profile.querySelector('.profile__avatar-job');
const elementsContainer = document.querySelector('.elements__items');


//Попапы
const profilePopup = document.querySelector('.profilePopup');
const cardPopup = document.querySelector('.cardPopup');
const imagePopup = document.querySelector('.imagePopup');
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
const elementTemplate = document.querySelector('#element').content;

const mestoTitle = cardPopupForm.querySelector('.popup__input-text_type_title');
const mestoLink = cardPopupForm.querySelector('.popup__input-text_type_link');

const popupPhoto = imagePopup.querySelector('.popup__photo');
const popupText = imagePopup.querySelector('.popup__text');



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function fillForm(){
  nameInput.value = avatarName.textContent;
  jobInput.value = avatarJob.textContent;
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
profilePopupOpen.addEventListener('click', () => openPopup(profilePopup));
profilePopupOpen.addEventListener('click', fillForm);
cardPopupOpen.addEventListener('click', () => openPopup(cardPopup));


//обработчики закрытия попапов
profilePopupClose.addEventListener('click', () => closePopup(profilePopup));
cardPopupClose.addEventListener('click', () => closePopup(cardPopup));
imagePopupClose.addEventListener('click', () => closePopup(imagePopup));
//обработчики отправки формы

profilePopupForm.addEventListener('submit', submitFormProfile);
cardPopupForm.addEventListener('submit', submitFormCard);
//Выгрузка карточек из массива

const handleDelete = (evt) => {
  evt.target.closest('.elements__item').remove();
};

const handleLike = (evt) => {
  evt.target.classList.toggle('elements__like-button_active');
};

const handleOpen = (evt) => {
  const thisItem = evt.target.closest('.elements__item');
  const itemPhoto = thisItem.querySelector('.elements__item-photo');
  const itemText = thisItem.querySelector('.elements__item-title');
  openPopup(imagePopup);
  popupPhoto.src = itemPhoto.src;
  popupPhoto.alt = itemText.textContent;
  popupText.textContent = itemText.textContent;
}


initialCards.forEach((item) => {
  generateCard(item);
});
function generateCard(item) {
  const newCard = createCard(item);
  elementsContainer.prepend(newCard);
}
function createCard(item) {
  const elementItem = elementTemplate.querySelector('.elements__item').cloneNode(true);
  const elementItemPhoto = elementItem.querySelector('.elements__item-photo');
  const elementItemTitle = elementItem.querySelector('.elements__item-title');
  elementItemTitle.textContent = item.name;
  elementItemPhoto.src = item.link;
  elementItemPhoto.alt = item.name;
  const deleteButton = elementItem.querySelector('.elements__item-delete');
  const likeButton = elementItem.querySelector('.elements__like-button');
  const openButton = elementItem.querySelector('.elements__item-photo');
  deleteButton.addEventListener('click', handleDelete);
  likeButton.addEventListener('click', handleLike);
  openButton.addEventListener('click', handleOpen);
  return elementItem;
}
