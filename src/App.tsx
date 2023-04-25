import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./router/privateRouter";
import Dashboard from "./screens/dashboard";
import "./styles/index.scss";

function App() {
  const PAGE404 = () => <h1>404</h1>;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="*" element={<PAGE404 />} />
          <Route path="/test" element={<PrivateRouter />}>
            <Route path="/test" element={<h1>Test</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
