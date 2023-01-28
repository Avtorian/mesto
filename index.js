const avatarName = document.querySelector('.profile__avatar-name');
const avatarJob = document.querySelector('.profile__avatar-job');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__input');
const likeButton = document.querySelectorAll('.elements__likeButton');
let nameInput = formElement.querySelector('.popup__input-text_type_name');
let jobInput = formElement.querySelector('.popup__input-text_type_job');

function popupEdit(){
  popup.classList.toggle('popup_opened');
  nameInput.value = avatarName.textContent;
  jobInput.value = avatarJob.textContent;

}


function handleFormSubmit (evt) {
    evt.preventDefault();
    if (nameInput.value === '' || jobInput.value === ''){
      alert('Введите данные !');
    }else{
      avatarName.textContent = nameInput.value;
      avatarJob.textContent = jobInput.value;
      popupEdit();
    }

}
editButton.addEventListener('click', popupEdit);
popupClose.addEventListener('click', popupEdit);
formElement.addEventListener('submit', handleFormSubmit);

  for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function() {
      likeButton[i].classList.toggle('elements__likeButton_active');
  })
}
