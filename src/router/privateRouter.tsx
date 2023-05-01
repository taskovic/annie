import { Navigate, Outlet } from "react-router-dom";
import { useIsAuth } from "~/hooks/useIsAuth";

const PrivateRouter = () => {

  const isAuth = useIsAuth();
  /**
   * If authorized, return an outlet that will render needed view
   * If not, return element that will navigate to login page probably
   */
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRouter;
