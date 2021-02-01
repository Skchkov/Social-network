/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ActionsTypes, ProfilePageType } from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
