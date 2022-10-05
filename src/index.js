import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider value={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
})

