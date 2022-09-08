let store = {
    
    _state : {
        getState() {
            return this._state;
        },
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
        ]}
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    addPost(){
        const newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};


export default store;
window.store = store;