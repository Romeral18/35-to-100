let store = {
    addPost(){
        const newPost = {
            id:5,
            message: state.profilePage.newPostText,
            likes: 0
        };
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    },
    updateNewPostText(newText) {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    }
}







export default store;