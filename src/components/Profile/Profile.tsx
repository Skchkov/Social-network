/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profilePage: ProfilePageType;
  addPost: (newPostText: string | null) => void;
  updateNewPostText: (newText: string) => void;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
