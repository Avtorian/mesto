const avatarName = document.querySelector('.profile__avatar-name');
const avatarJob = document.querySelector('.profile__avatar-job');
const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__input');
let nameInput = formElement.querySelector('.popup__input-text_type_name');
let jobInput = formElement.querySelector('.popup__input-text_type_job');

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

