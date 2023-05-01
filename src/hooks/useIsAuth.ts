import LocalStorage from "services/local-storage";

export const useIsAuth = () => {
  const token = LocalStorage.getToken();
  return  token ? true : false;
}