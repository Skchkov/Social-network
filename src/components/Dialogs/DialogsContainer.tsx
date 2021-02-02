import { connect } from "react-redux";
import {
  ActionsTypes,
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { RootStateType } from "../../redux/reduxStore";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
