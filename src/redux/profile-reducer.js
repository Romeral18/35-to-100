const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {message: "Hi, how are you?", likes: "15"},
        {message: "Let's go dance!", likes: "1000"},
        {message: "Let's go dance!", likes: "1000"},
        {message: "Let's go dance!", likes: "1000"},
        {message: "Let's go dance!", likes: "1000"}
    ],
    newPostText: 'YoYoYo'

};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};


    export const addPostActionCreator = () => ({type: ADD_POST});
    export const updateNewPostTextActionCreator = (text) =>
        ({type: UPDATE_NEW_POST_TEXT, newText: text});

    export default profileReducer;