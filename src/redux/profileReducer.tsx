import React from "react";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = (
  newPostText: string
): AddPostActionType => {
  return {
    type: ADD_POST,
    newPostText: newPostText,
  };
};

export const updateNewPostTextActionCreator = (
  newText: string
): UpdateNewPostTextActionType => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
  };
};
export default profileReducer;
