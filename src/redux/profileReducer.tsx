const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
  profile: any;
};

let initialState: ProfilePageType = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Love Death and Robots", likesCount: 41 },
    { id: 3, message: "Dead line", likesCount: 41 },
    { id: 4, message: "Cream-soda", likesCount: 41 },
  ],
  newPostText: "",
  profile: {},
};

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType;

// type AddPostActionType = {
//   type: "ADD-POST";
//   newPostText: string;
// };

// type UpdateNewPostTextActionType = {
//   type: "UPDATE-NEW-POST-TEXT";
//   newText: string;
// };

type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type UpdateNewPostTextActionType = ReturnType<
  typeof updateNewPostTextActionCreator
>;
export type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: any;
};

export const addPostActionCreator = () => ({ type: ADD_POST } as const);

export const updateNewPostTextActionCreator = (newText: any) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText,
  } as const);

export const setUserProfileAC = (profile: any): SetUserProfileActionType =>
  ({ type: SET_USER_PROFILE, profile } as const);

export default profileReducer;
