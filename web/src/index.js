import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "./reducer/requestStatus";

import App from "./component/App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducers, applyMiddleware(promiseMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
