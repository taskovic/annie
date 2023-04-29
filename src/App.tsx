import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "router/privateRouter";
import Dashboard from "views/dashboard";
import Login from "views/login";
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
          <Route index path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          {/**
           *  Protected routes
           */}
          <Route path="/test" element={<PrivateRouter />}>
            <Route path="/test" element={<h1>Test</h1>} />
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
