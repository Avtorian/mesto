export class Card {
  constructor({ item, userId, handleCardClick, handleDeleteClick, handleLikeClick }, templateSelector) {
    this._item = item;
    this._title = this._item.name;
    this._photo = this._item.link;
    this._likes = this._item.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._myId = userId;
    this._ownerId = item.owner._id;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  }
  haveLike() {
    return this._likes.some(item => item._id === this._myId)
  }
  removeCard() {
    this._elementItem.remove();
  }
  updateDisplayLike() {
    this._likesValue.textContent = this._likes.length;
    if (this.haveLike()) {
      this._likeButton.classList.add('elements__like-button_active');
    }
    else {
      this._likeButton.classList.remove('elements__like-button_active');
    }
  }
  updateLike(item) {
    this._likes = item.likes;
  }
  _setEventListeners() {
    this._deleteButton = this._elementItem.querySelector('.elements__item-delete');
    this._likeButton = this._elementItem.querySelector('.elements__like-button');
    this._deleteButton.addEventListener('click', () => { this._handleDeleteClick() });
    this._likeButton.addEventListener('click', () => { this._handleLikeClick() });
    this._elementItemPhoto.addEventListener('click', () => { this._handleCardClick(this._title, this._photo) });

  }
  createCard() {

    this._elementItem = this._getTemplate();
    this._elementItemTitle = this._elementItem.querySelector('.elements__item-title');
    this._elementItemPhoto = this._elementItem.querySelector('.elements__item-photo');
    this._likesValue = this._elementItem.querySelector('.elements__like-value');
    this._likesValue.textContent = this._likes.length;
    this._elementItemTitle.textContent = this._title;
    this._elementItemPhoto.src = this._photo;
    this._elementItemPhoto.alt = this._title;
    this._setEventListeners();

    if (this.haveLike()) { this._likeButton.classList.add('elements__like-button_active') }
    if (this._ownerId !== this._myId) { this._deleteButton.classList.add('elements__item-delete_hidden') }
    return this._elementItem;
  }
}
