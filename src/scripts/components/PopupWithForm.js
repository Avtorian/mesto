import { Popup } from "./Popup.js"
export class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitСallback }) {
    super(popupSelector);
    this._formSubmitСallback = formSubmitСallback;
    this._popupForm = this._popup.querySelector('.popup__input');
    this._inputList = this._popup.querySelectorAll('.popup__input-text');
    this._button = this._popup.querySelector('.popup__submit-btn');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  downloadProcess(text) {
    this._button.textContent = text;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmitСallback(this._getInputValues());
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
