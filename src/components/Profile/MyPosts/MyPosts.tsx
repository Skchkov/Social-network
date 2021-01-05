/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { PostType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<PostType>;
};

const MyPosts = (props: PropsType) => {
  // let posts = [
  //   { id: 1, message: "Hi, how are you?", likesCount: 12 },
  //   { id: 2, message: "Love Death and Robots", likesCount: 41 },
  //   { id: 3, message: "Dead line", likesCount: 41 },
  //   { id: 4, message: "Cream-soda", likesCount: 41 },
  // ];

  let postsElements = props.posts.map((p: PostType) => (
    <Post message={p.message} likeCounter={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>New posts</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
