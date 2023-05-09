import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { authSlice } from "api/authSlice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={authSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
