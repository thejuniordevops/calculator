import React from "react";
import { Provider } from "react-redux";

import store  from "./src/store";

import Root from "./src/screen";

const CalculatorApp = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default CalculatorApp;