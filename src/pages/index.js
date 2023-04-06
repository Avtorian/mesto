import '../pages/index.css';
import { Card } from "../scripts/components/Card.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { FormValidator } from "../scripts/components/FormValidator.js";

import {
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

} from "../scripts/utils/constants.js";
//Профиль
const userInfo = new UserInfo({ avatarNameSelector, avatarJobSelector });

const profilePopup = new PopupWithForm({
  popupSelector: profilePopupSelector,
  formSubmitСallback: (data) => {
    userInfo.setUserInfo(data.avatarName, data.avatarJob);
    profilePopup.close();
  }
});
profilePopup.setEventListeners();

profilePopupOpen.addEventListener("click", () => {
  profilePopup.open();
  const userdata = userInfo.getUserInfo();
  nameInput.value = userdata.nameInput;
  jobInput.value = userdata.jobInput;
});

//Генерация карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(generateCard(item));
  }
}, cardListSelector);

function generateCard(item) {
  const card = new Card({
    item,
    handleCardClick: (photo, title) => {
      imagePopup.open(photo, title);
    }
  },
    templateSelector);
  const itemCard = card.createCard();
  return itemCard;
}
cardList.renderItems();

//Попап добавления карточек
const cardPopup = new PopupWithForm({
  popupSelector: cardPopupSelector,
  formSubmitСallback: (data) => {
    const item = {};
    item.name = data.mestoTitle;
    item.link = data.mestoLink;
    cardList.addItem(generateCard(item));
    cardPopup.close();
  }
});
cardPopup.setEventListeners();

cardPopupOpen.addEventListener("click", () => {
  cardPopup.open();
});

//Попап открытия изображений с описанием
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//Валидация форм
const profilePopupValid = new FormValidator(settings, profilePopup._popup);
profilePopupValid.enableValidation();
const cardPopupValid = new FormValidator(settings, cardPopup._popup);
cardPopupValid.enableValidation();

