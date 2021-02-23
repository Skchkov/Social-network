import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props: any) => {
  return (
    <header className={s.header}>
      <img
        alt="img"
        src="https://www.seekpng.com/png/detail/69-695584_vector-format-logos-21st-world-congress-on-psychology.png"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
