import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Header, Footer } from "./component/index.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer />
  </Provider>
);
