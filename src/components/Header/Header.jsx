import React from "react";
import "./Header.module.scss";
import style from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
    </header>
  );
};

export default Header;
