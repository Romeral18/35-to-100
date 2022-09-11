import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const store = {

    _state: {
        staticPages: {
            links: [
                {href: '/profile', name: 'profile'},
                {href: '/dialogs', name: 'dialogs'},
                {href: '/news', name: 'news'},
                {href: '/settings', name: 'settings'},
            ]
        },
        profilePage: {
            posts: [
                {message: "Hi, how are you?", likes: "15"},
                {message: "Let's go dance!", likes: "1000"},
                {message: "Let's go dance!", likes: "1000"},
                {message: "Let's go dance!", likes: "1000"},
                {message: "Let's go dance!", likes: "1000"}
            ],
            newPostText: 'YoYoYo'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Daniil'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Daniel'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Arseniy'}
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I am nice!'},
                {id: 4, message: 'Updating...'}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
};


export default store;