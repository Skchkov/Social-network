/* eslint-disable jsx-a11y/alt-text */
import { connect } from "react-redux";
import {
  ActionsTypes,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { RootStateType } from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: RootStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
  return {
    updateNewPostText: (NewText: string | undefined) => {
      let action = updateNewPostTextActionCreator(NewText);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
