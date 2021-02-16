const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

export type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  newMessageBody: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};

let initialState = {
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
};

const dialogsReducer = (
  state: DialogPageType = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      debugger;
      return { ...state, newMessageBody: action.body };
    }

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      debugger;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};

export type ActionsTypes = UpdateNewPostTextActionType | SendMessageActionType;

type SendMessageActionType = ReturnType<typeof sendMessageCreator>;
type UpdateNewPostTextActionType = ReturnType<
  typeof updateNewMessageBodyCreator
>;

export const updateNewMessageBodyCreator = (body: string) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const);
export const sendMessageCreator = () => ({ type: SEND_MESSAGE } as const);

export default dialogsReducer;
