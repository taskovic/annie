import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const auth = true; // determine if authorized, from context or however you're doing it

  /**
   * If authorized, return an outlet that will render needed view
   * If not, return element that will navigate to login page probably
   */
  return auth ? <Outlet /> : <Navigate to="/fda" />;
};
export default PrivateRouter;
