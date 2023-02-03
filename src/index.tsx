import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/redux-store";
import React from "react";

import {Provider} from "react-redux";

let rerenderEntireTree = (state: any) => {


    ReactDOM.render(
        <HashRouter>
            <Provider store={store} >
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
