import React from "react";
import "./MyPosts.module.scss";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../Context";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer> {(store) => {
            const newPostText = store.getState().profilePage.newPostText;
            const posts = store.getState().profilePage.posts;
            const addPost = () => {
                store.dispatch(addPostActionCreator())
            };
            const onPostChange = (text) => {
                const action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            }
            return <MyPosts addPost={addPost}
                            updateNewPostText={onPostChange}
                            newPostText={newPostText}
                            posts={posts}/>
        }
        }
        </StoreContext.Consumer>);
};
export default MyPostsContainer;