export class Card {
  constructor({ item, handleCardClick }, templateSelector) {
    this._item = item;
    this._title = this._item.name;
    this._photo = this._item.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
  _handleView = () => {
    this._handleCardClick(this._title, this._photo);
  }
  _setEventListeners() {
    this._deleteButton = this._elementItem.querySelector('.elements__item-delete');
    this._likeButton = this._elementItem.querySelector('.elements__like-button');
    this._deleteButton.addEventListener('click', () => { this._handleDelete() });
    this._likeButton.addEventListener('click', () => { this._handleLike() });
    this._elementItemPhoto.addEventListener('click', () => { this._handleView() });
  }
  createCard() {
    this._elementItem = this._getTemplate();
    this._elementItemTitle = this._elementItem.querySelector('.elements__item-title');
    this._elementItemPhoto = this._elementItem.querySelector('.elements__item-photo');
    this._elementItemTitle.textContent = this._title;
    this._elementItemPhoto.src = this._photo;
    this._elementItemPhoto.alt = this._title;
    this._setEventListeners();
    return this._elementItem;
  }
}
