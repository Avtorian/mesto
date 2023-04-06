export class UserInfo {
  constructor({ avatarNameSelector, avatarJobSelector }) {
    this._avatarName = document.querySelector(avatarNameSelector);
    this._avatarJob = document.querySelector(avatarJobSelector);

  }

  getUserInfo() {
    return {
      nameInput: this._avatarName.textContent,
      jobInput: this._avatarJob.textContent
    }
  }

  setUserInfo(avatarName, avatarJob) {
    this._avatarName.textContent = avatarName;
    this._avatarJob.textContent = avatarJob;
  }
}
