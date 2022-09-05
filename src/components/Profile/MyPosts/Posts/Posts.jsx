import React from "react";
import "./Posts.module.scss";
import style from "./Posts.module.scss";

const Posts = (props) => {
  return (
    <div className={style.posts}>
      <div>
        <img
          src="https://sun9-15.userapi.com/s/v1/if2/RqFaebfWu7K8Tcx9vOiBFQMJhH3klxDdrRhzlObjdCp5V7bd8AlYpLN-bLl1bL6quiBCxTlh4I-OSv4NYG_952Rp.jpg?size=1280x848&quality=96&type=album"
          alt=""
          className={style.avatar}
        />
        {props.message}
      </div>
      <div>Likes: {props.likes}</div>
    </div>
  );
};
export default Posts;
