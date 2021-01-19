const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

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

type UpdateNewMessageBody = {
  type: "UPDATE-NEW-MESSAGE-BODY";
  body: string;
};

type SendMessage = {
  type: "SEND-MESSAGE";
  newMessageBody: string;
};
export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageBody
  | SendMessage;

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
      newMessageBody: "",
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
    if (action.type === ADD_POST) {
      let newPost: PostType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
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

export const sendMessageCreator = (newMessageBody: string): SendMessage => {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody,
  };
};

export const updateNewMessageBodyCreator = (
  body: string
): UpdateNewMessageBody => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
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
  newMessageBody: string;
};

type SideBar = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SideBar;
};

export default store;
