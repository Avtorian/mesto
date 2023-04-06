import { Popup } from "./Popup.js"
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._itemPhoto = this._popup.querySelector('.popup__photo');
    this._itemText = this._popup.querySelector('.popup__text');
  }

  open(text, photo) {
    this._itemPhoto.src = photo;
    this._itemPhoto.alt = text;
    this._itemText.textContent = text;
    super.open();
  }
}
