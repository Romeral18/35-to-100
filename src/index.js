import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./Context";
import store from "./redux/redux-store";


let rerenderEntireTree = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
})

