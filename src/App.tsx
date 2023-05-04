import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "router/privateRouter";
import Dashboard from "views/dashboard";
import Login from "~/views/login/login";
import Logout from "views/logout/logout";
import ResetPassword from "~/views/resetPassword/resetPassword";
import SetNewPassword from "./views/setNewPassword/setNewPassword";
import NotFound from "views/404";
import "styles/index.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/**
           * Public routes
           */}
          <Route path="/login" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/**
           *  Protected routes
           */}
          <Route path="/dashboard" element={<PrivateRouter />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/reset-password" element={<PrivateRouter />}>
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route path="/set-new-password" element={<PrivateRouter />}>
            <Route path="/set-new-password" element={<SetNewPassword />} />
          </Route>

          {/**
           * 404 route
           */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
