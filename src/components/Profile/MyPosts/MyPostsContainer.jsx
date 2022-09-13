import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Posts from "./Posts/Posts";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };
    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);

    }

  return (<MyPosts addPost = {addPost} updateNewPostText = {onPostChange}  newPostText={props.newPostText} posts={props.posts}/>);
};
export default MyPostsContainer;