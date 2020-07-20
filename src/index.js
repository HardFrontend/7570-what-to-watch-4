import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {ActionCreator as UserActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {ActionCreator as AppStateActionCreator} from "./reducer/app-state/app-state.js";
import {Operation as UserOperation} from "./reducer/user/user.js";
import {createAPI} from "./api";


const onNotFound = () => {
  store.dispatch(AppStateActionCreator.changeServerStatusOnError());
};

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onNotFound, onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadPromo());

store.dispatch(DataOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/> </Provider>,
    document.querySelector(`#root`)
);
