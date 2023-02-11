const avatarName = document.querySelector('.profile__avatar-name');
const avatarJob = document.querySelector('.profile__avatar-job');
const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__input');
let nameInput = formElement.querySelector('.popup__input-text_type_name');
let jobInput = formElement.querySelector('.popup__input-text_type_job');
const elementItems = document.querySelector('.elements__items');
const popupAdd = document.querySelector('.popupAdd');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAddClose = popupAdd.querySelector('.popupAdd__close');
const addButton = popupAdd.querySelector('.popupAdd__input');
const mestoTitle = popupAdd.querySelector('.popupAdd__input-text_type_title');
const mestoLink = popupAdd.querySelector('.popupAdd__input-text_type_link');
const elementTemplate = document.querySelector('#element').content;
const popupImage = document.querySelector('.popupImage');
const popupPhoto = popupImage.querySelector('.popupImage__photo');
const popupText = popupImage.querySelector('.popupImage__text');
const closeButton = popupImage.querySelector('.popupImage__close');

function openPopup(){
  popup.classList.add('popup_opened');
  nameInput.value = avatarName.textContent;
  jobInput.value = avatarJob.textContent;
}
function closePopup(){
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    avatarName.textContent = nameInput.value;
    avatarJob.textContent = jobInput.value;
    closePopup();
}
buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

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


function openPopupAdd(){
  popupAdd.classList.add('popupAdd_opened');
}
function closePopupAdd(){
  popupAdd.classList.remove('popupAdd_opened');
}

function renderButton(){
  const elementsItem = document.querySelector('.elements__item');
  const likeButton = elementsItem.querySelector('.elements__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });

  const deleteButton = elementsItem.querySelector('.elements__item-delete');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.elements__item').remove();
  });

  const itemPhoto = document.querySelector('.elements__item-photo');
  const itemText = document.querySelector('.elements__item-title');
  itemPhoto.addEventListener('click', function (evt) {
    popupImage.classList.add('popupImage_opened');
    popupPhoto.src = itemPhoto.src;
    popupPhoto.alt = itemText.textContent;
    popupText.textContent = itemText.textContent;
  });

  closeButton.addEventListener('click', function (evt){
    popupImage.classList.remove('popupImage_opened');
  });
}

initialCards.forEach((item) => {
  addElement(item);
  renderButton();

});
function addElement(item){
  const elementItem = elementTemplate.querySelector('.elements__item').cloneNode(true);
  const elementItemPhoto = elementItem.querySelector('.elements__item-photo');
  const elementItemTitle = elementItem.querySelector('.elements__item-title');
  elementItemTitle.textContent = item.name;
  elementItemPhoto.src = item.link;
  elementItemPhoto.alt = item.name;
  elementItems.prepend(elementItem);
};
function addSubmit (evt){
  evt.preventDefault();
  const item = {
    name: mestoTitle.value,
    link: mestoLink.value
  };
  addElement(item);
  closePopupAdd();
  renderButton();
}
buttonAdd.addEventListener('click', openPopupAdd);
popupAddClose.addEventListener('click', closePopupAdd);
addButton.addEventListener('submit', addSubmit);
