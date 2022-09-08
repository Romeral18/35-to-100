import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import store from './redux/state';


let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} 
                updateNewPostText={store.updateNewPostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
};
rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree)

