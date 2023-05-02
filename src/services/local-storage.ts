export default class LocalStorage {

  static setUser(value: object): void {
    localStorage.setItem("userData", JSON.stringify(value));
  }

  static userEmail(): string | boolean {
    const userData = this.getUserData();
    if (!userData) return false;
    const { user: { email } } = userData;
    return email;
  }

  static getToken(): string | boolean {
    const userData = this.getUserData();
    if (!userData) return false;
    const { accessToken }: any = userData;
    return accessToken;
  }

  static setToken(token: string): void {
    const user = this.getUserData();
    user.accessToken = token;
    this.setUser(user);
  }

  static clear(): void {
    localStorage.clear();
  }

  static getUserData() {
    return JSON.parse(localStorage.getItem("userData") as string)
  }
}
