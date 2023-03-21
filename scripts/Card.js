import { imagePopup, popupPhoto, popupText } from "./utils/constants.js";
import { openPopup } from "./utils/utils.js";
export class Card{
  constructor(item, templateSelector) {
    this._item = item;
    this._title = this._item.name;
    this._photo = this._item.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  }
  _handleDelete = () => {
    this._elementItem.closest('.elements__item').remove();
  };
  _handleLike = () => {
    this._likeButton.classList.toggle('elements__like-button_active');
  };
  _handleOpen = () => {
    this._thisItem = this._elementItem.closest('.elements__item');
    this._itemPhoto = this._thisItem.querySelector('.elements__item-photo');
    this._itemText = this._thisItem.querySelector('.elements__item-title');
    openPopup(imagePopup);
    popupPhoto.src = this._itemPhoto.src;
    popupPhoto.alt = this._itemText.textContent;
    popupText.textContent = this._itemText.textContent;
  }
  _setEventListeners(){
    this._deleteButton.addEventListener('click', () => {this._handleDelete()});
    this._likeButton.addEventListener('click', () => {this._handleLike()});
    this._elementItemPhoto.addEventListener('click', () => {this._handleOpen()});
  }
  createCard(){
      this._elementItem = this._getTemplate();
      this._elementItemPhoto = this._elementItem.querySelector('.elements__item-photo');
      this._elementItemTitle = this._elementItem.querySelector('.elements__item-title');
      this._elementItemTitle.textContent = this._title;
      this._elementItemPhoto.src = this._photo;
      this._elementItemPhoto.alt = this._title;
      this._deleteButton = this._elementItem.querySelector('.elements__item-delete');
      this._likeButton = this._elementItem.querySelector('.elements__like-button');
      this._setEventListeners();
      return this._elementItem;
}}
