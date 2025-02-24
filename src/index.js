import ReactDOM from "react-dom";
import React from 'react';
import {Provider} from "react-redux";
import store from "./app/store"
import App from "./app/containers/app";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
