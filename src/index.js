import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/ConfigureStore";
import { Provider } from "react-redux";

const initialState = {}
const store = configureStore(initialState);


const isAuth = () => {
  const userData = window.localStorage.getItem("task-userData");
  if(userData){
      store.getState().auth.isAuth = true;
      store.getState().auth.data = JSON.parse(userData);
  }
}

export const logOut = () => {
  window.localStorage.removeItem("task-userData");
  store.getState().auth.isAuth = false;
  store.getState().auth.data = null;
}
isAuth();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> <App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
