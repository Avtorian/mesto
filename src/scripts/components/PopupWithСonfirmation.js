import { Popup } from "./Popup.js"
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__confirm');
  }
  setCallback(callback) {
    this._handleCallback = callback;
  }

  downloadProcess(Loading) {
    if (Loading) {
      this._button.textContent = 'Удаление...';
    } else {
      this._button.textContent = 'Да';
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      this._handleCallback();
    });
  }
}
