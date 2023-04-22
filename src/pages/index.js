import '../pages/index.css';
import { Card } from "../scripts/components/Card.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithConfirmation } from '../scripts/components/PopupWithСonfirmation';
import { FormValidator } from "../scripts/components/FormValidator.js";
import { api } from '../scripts/components/Api';

import {
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
} from "../scripts/utils/constants.js";
import { data } from 'autoprefixer';
//Профиль
const userInfo = new UserInfo({ avatarNameSelector, avatarJobSelector, avatarSelector });

const profilePopup = new PopupWithForm({
  popupSelector: profilePopupSelector,
  formSubmitСallback: (data) => {
    profilePopup.downloadProcess("Сохранение...")
    api.editProfile(data)
      .then(() => {
        userInfo.setUserInfo(data.avatarName, data.avatarJob);
        profilePopup.close();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
      .finally(() => profilePopup.downloadProcess("Сохранить"))
  }
});
profilePopup.setEventListeners();

profilePopupOpen.addEventListener("click", () => {
  profilePopup.open();
  const userdata = userInfo.getUserInfo();
  nameInput.value = userdata.nameInput;
  jobInput.value = userdata.jobInput;
  profilePopupValid.resetValidation();
});

let userId;
//Генерация карточек и получение данных профиля
Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([initialCards, userData]) => {
    // ["Первый промис", "Второй промис"]
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    userId = userData._id;
    initialCards.reverse();
    cardList.renderItems(initialCards);
  })
  .catch((err) => console.log(`Ошибка ${err}`))

const cardList = new Section(
  (item) => { cardList.addItem(generateCard(item)) },
  cardListSelector);

function generateCard(item) {
  const card = new Card({
    item,
    userId,
    handleCardClick: (photo, title) => {
      imagePopup.open(photo, title);
    },
    handleDeleteClick: () => {
      deletePopup.setCallback(() => {
        deletePopup.downloadProcess(true)
        api.removeCard(item._id)
          .then(() => {
            deletePopup.close()
            card.removeCard()
          })
          .catch((err) => console.log(`Ошибка ${err}`))
          .finally(() => deletePopup.downloadProcess(false))
      })
      deletePopup.open();
    },
    handleLikeClick: () => {
      if (card.haveLike()) {
        api.removeLike(item._id)
          .then((item) => {
            card.updateLike(item);
            card.updateDisplayLike();
          })
          .catch((err) => console.log(`Ошибка ${err}`))
      }
      else {
        api.addLike(item._id)
          .then((item) => {
            card.updateLike(item);
            card.updateDisplayLike();
          })
          .catch((err) => console.log(`Ошибка ${err}`))
      }
    }
  },
    templateSelector);
  const itemCard = card.createCard();
  return itemCard;
}
//Попап подтверждения
const deletePopup = new PopupWithConfirmation(cardDeletePopupSelector);
deletePopup.setEventListeners();

//Попап изменения аватарки
const editAvatarPopup = new PopupWithForm({
  popupSelector: profileAvatarPopupSelector,
  formSubmitСallback: (data) => {
    //Изменение кнопки при нажатии
    editAvatarPopup.downloadProcess("Сохранение...");
    api.editProfileAvatar(data)
      .then(() => {
        userInfo.setUserAvatar(data.avatarLink)
        editAvatarPopup.close()
        editAvatarPopupValid.resetValidation()
      })
      .catch((err) => console.log(`Ошибка ${err}`))
      //Изменение кнопки после загрузки
      .finally(() => editAvatarPopup.downloadProcess("Сохранить"));
  }
});
editAvatarPopup.setEventListeners();
//Обработка кнопки
avatarPopupEdit.addEventListener('click', () => {
  editAvatarPopup.open();
})
//Попап добавления карточек
const cardPopup = new PopupWithForm({
  popupSelector: cardPopupSelector,
  formSubmitСallback: (data) => {
    cardPopup.downloadProcess("Создание...")
    api.addNewCard(data)
      .then((item) => {
        cardList.addItem(generateCard(item))
        cardPopup.close()
      })
      .catch((err) => console.log(`Ошибка ${err}`))
      .finally(() => cardPopup.downloadProcess("Создать"))
  }
});
cardPopup.setEventListeners();

//Обработка кнопки
cardPopupOpen.addEventListener("click", () => {
  cardPopup.open();
  cardPopupValid.resetValidation();
});

//Попап открытия изображений с описанием
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();


//Валидация форм
const profilePopupValid = new FormValidator(settings, profilePopup._popup);
profilePopupValid.enableValidation();
const cardPopupValid = new FormValidator(settings, cardPopup._popup);
cardPopupValid.enableValidation();
const editAvatarPopupValid = new FormValidator(settings, editAvatarPopup._popup);
editAvatarPopupValid.enableValidation();
