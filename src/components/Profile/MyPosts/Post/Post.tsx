/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./Post.module.css";

type messageType = {
  message: string;
  likeCounter: number;
};

const Post = (props: messageType) => {
  return (
    <div className={s.item}>
      <img src="https://www.nastol.com.ua/download.php?img=201203/2560x1600/nastol.com.ua-17643.jpg" />
      {props.message}
      <div>
        <span> like {props.likeCounter}</span>
      </div>
    </div>
  );
};

export default Post;
