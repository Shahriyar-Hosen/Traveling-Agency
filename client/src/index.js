import React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line
import "swiper/css/bundle";

// Redux Toolkit
import { Provider } from "react-redux";
import { store } from "./app/store";

// react-date-range
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
