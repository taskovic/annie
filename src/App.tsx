import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "router/privateRouter";
import Dashboard from "views/dashboard";
import Login from "views/login/login";
import Logout from "views/logout/logout";
import ResetPassword from "views/resetPassword/resetPassword";
import SetNewPassword from "views/setNewPassword/setNewPassword";
import ForgotPassword from "views/forgotPassword/forgotPassword";
import EmailSended from "~/views/emailSended/EmailSended";
import PasswordChanged from "~/views/passwordChanged/PasswordChanged";
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
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/email-sended" element={<EmailSended />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
          {/**
           *  Protected routes
           */}
          <Route path="/dashboard" element={<PrivateRouter />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/reset-password" element={<PrivateRouter />}>
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

           {/* <Route path="/forgot-password" element={<PrivateRouter />}>
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route> */}

          {/* <Route path="/set-new-password" element={<PrivateRouter />}>
            <Route path="/set-new-password" element={<SetNewPassword />} />
          </Route> */}

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
