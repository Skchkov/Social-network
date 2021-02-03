const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Love Death and Robots", likesCount: 41 },
    { id: 3, message: "Dead line", likesCount: 41 },
    { id: 4, message: "Cream-soda", likesCount: 41 },
  ],
  newPostText: "",
};

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTypes
) => {
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
    default:
      return state;
  }
};

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType;

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

export const addPostActionCreator = () => ({ type: ADD_POST } as const);

export const updateNewPostTextActionCreator = (newText: any) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
  } as const);
export default profileReducer;
