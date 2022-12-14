import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Posts from "./Posts/Posts";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";





const MyPosts = (props) => {
    const postElements =
        props.posts.map( p => (<Posts message={p.message} likes={p.likes} />));

    const newPostElement = React.createRef();

    const onAddPost = () => {
         props.addPost();
    };
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

  return (
    <div className={style.newPosts}>
      <textarea name="post" id="" cols="15" rows="5" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
      <div>
        <button onClick={ onAddPost }>Add</button>
      </div>
        { postElements}
    </div>
  );
};
export default MyPosts;