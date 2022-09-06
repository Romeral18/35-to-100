import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {subscribe} from './redux/state';
import state from './redux/state'
import store from './redux/store'

let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store = {store} />
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

