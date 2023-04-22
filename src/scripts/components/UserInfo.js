export class UserInfo {
  constructor({ avatarNameSelector, avatarJobSelector, avatarSelector }) {
    this._avatarName = document.querySelector(avatarNameSelector);
    this._avatarJob = document.querySelector(avatarJobSelector);
    this._avatar = document.querySelector(avatarSelector);

  }

  getUserInfo() {
    return {
      nameInput: this._avatarName.textContent,
      jobInput: this._avatarJob.textContent,
      avatarInput: this._avatar.textContent
    }
  }

  setUserInfo(avatarName, avatarJob) {
    this._avatarName.textContent = avatarName;
    this._avatarJob.textContent = avatarJob;
  }
  setUserAvatar(avatar){
    this._avatar.src = avatar;
  }
}
