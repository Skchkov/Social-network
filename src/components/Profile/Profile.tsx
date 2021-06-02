/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ProfilePageType } from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfilePageType | null;
};

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
