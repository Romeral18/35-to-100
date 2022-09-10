const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


const store = {
    
    _state : {
        staticPages: {links: [
            {href: '/profile', name: 'profile'},
            {href: '/dialogs', name: 'dialogs'},
            {href: '/news', name: 'news'},
            {href: '/settings', name: 'settings'},
        ]},
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

    dispatch(action){ // type: 'ADD-POST'
        if (action.type === 'ADD-POST') {
            const newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 4, message: body});
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }

    }
    
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;
window.store = store;