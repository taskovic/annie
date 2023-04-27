export default class LocalStorage {
  static userRole() {
    const user = localStorage.getItem("user");
    if (!user) return null;
    return user.role; 
  }

  static userID() {
    const user = localStorage.getItem("user");
    if (!user) return null;
    return user.id; 
  }

  static setUser(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getTokens() {
    return {
      token: "asdasgjksafjakafgklas4923852klrtfjoqdq0i239t2",
      refresh_token: "rasdflkaiopfaf;aujfoasigeti9234332t41"
    }
  }

  static setToken(token: string): void {
    const user = localStorage.get("user");
    user.token = token;
    this.setUser("user", user);
  }

  static setRefreshToken(refresh_token: string): void {
    const user = localStorage.get("user");
    user.refresh_token = refresh_token;
    this.setUser("user", user);
  }

  static removeRefreshToken(key: string): void {
    const user = localStorage.get("user");
    user.refresh_token = "";
    this.setUser("user", user);
  }
}