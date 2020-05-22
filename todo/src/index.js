import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import reducer from "redux/reducer";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
