import React from "react";
import "./BackgroundPhoto.module.scss";
import style from "./BackgroundPhoto.module.scss";

const BackgroundPhoto = () => {
  return (
    <div>
      <img
        src="https://funart.pro/uploads/posts/2021-04/thumbs/1618562540_9-funart_pro-p-oboi-fon-estetichnii-fon-bezhevii-9.jpg"
        alt=""
        className={style.backgroundPhoto}
      />
    </div>
  );
};
export default BackgroundPhoto;
