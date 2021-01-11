/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { PostType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<PostType>;
  newPostText: string;
  updateNewPostText: (newText: any) => void;
  addPost: (newPostText: string | null) => void;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.posts.map((p: PostType) => (
    <Post message={p.message} likeCounter={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    let text = newPostElement.current && newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current && newPostElement.current.value; //   newPostElement.current?.value
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>New posts</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
