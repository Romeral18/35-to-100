import React from 'react'
import './Profile.module.scss'
import MyPosts from './MyPosts/MyPostsContainer'
import BackgroundPhoto from './BackgroundPhoto/BackgroundPhoto'
import Cap from './Cap/Cap'
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
  return (
    <div>
      <BackgroundPhoto />
      <Cap />
      <MyPostsContainer store={props.store} posts={props.posts}  newPostText={props.newPostText} />
    </div>
  );
};
export default Profile;

