export default class LocalStorage {

  static setUser(value: object): void {
    localStorage.setItem("userData", JSON.stringify(value));
  }

  static getToken() {
    const { accessToken }: any = JSON.parse(localStorage.getItem("userData"));
    return accessToken;
  }

  static setToken(token: string): void {
    const user = JSON.parse(localStorage.getItem("userData"));
    user.accessToken = token;
    this.setUser(user);
  }
}
