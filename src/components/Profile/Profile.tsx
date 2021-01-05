/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  state: ProfilePageType;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
