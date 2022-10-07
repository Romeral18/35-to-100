import React from "react";
import "./MyPosts.module.scss";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }

    }
}

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;