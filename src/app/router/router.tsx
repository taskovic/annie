import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRouter from "./privateRouter";

import ViewProvider from "../views/view-provider";


const PAGE404 = () => <h1>404</h1>;

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ViewProvider view={"Home"} />} />
        {/* <Route path="*" element={<PAGE404 />} />
        <Route path='/test' element={<PrivateRouter />}>
          <Route path='/test' element={<Home/>}/>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
