/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
