import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Posts from "./Posts/Posts";






const MyPosts = (props) => {
    const postElements =
        props.posts.map( p => (<Posts message={p.message} likes={p.likes} />));

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' }) 
    };
    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);

    }

  return (
    <div className={style.newPosts}>
      <textarea name="post" id="" cols="15" rows="5" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
      <div>
        <button onClick={ addPost }>Add</button>
      </div>
        {postElements}
    </div>
  );
};
export default MyPosts;