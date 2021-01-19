export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
  _callSubscriber: (state: RootStateType) => void;
  // addPost: (newPostText: string | null) => void;
  // updateNewPostText: (newText: string) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  dispatch: (action: ActionsTypes) => void;
};

type AddPostActionType = {
  type: "ADD-POST";
  newPostText: string;
};

type UpdateNewPostTextActionType = {
  type: "UPDATE-NEW-POST-TEXT";
  newText: string;
};

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType;

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Love Death and Robots", likesCount: 41 },
        { id: 3, message: "Dead line", likesCount: 41 },
        { id: 4, message: "Cream-soda", likesCount: 41 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Solaris" },
        { id: 2, name: "Survival" },
        { id: 3, name: "Xerlol" },
        { id: 4, name: "Kek" },
        { id: 5, name: "Kanonirni4eg" },
        { id: 6, name: "Baldej" },
      ],
      messages: [
        { id: 1, message: "Hi boys" },
        { id: 2, message: 'Do you want some "games"?' },
        { id: 3, message: "Let's do this" },
        { id: 4, message: "Let's do this" },
        { id: 5, message: "Let's do this" },
      ],
    },
    sidebar: {},
  },
  _callSubscriber(state: RootStateType) {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer // publisher subscriber
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost: PostType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

type SideBar = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SideBar;
};

export default store;
