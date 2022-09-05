
let rerenderEntireTree = (state) => {
    console.log('state was changed')
}


let state = {
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
}



export const addPost = () => {
    const newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;