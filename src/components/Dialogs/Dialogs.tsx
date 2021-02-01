import React from "react";
import {
  DialogPageType,
  DialogType,
  MessageType,
  sendMessageCreator,
  StoreType,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

type PropsType = {
  state: DialogPageType;
  store: StoreType;
};

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.state.dialogs.map((d: DialogType) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let state = props.store.getState().dialogsPage;
  let messagesElements = state.messages.map((m: MessageType) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator(newMessageBody));
  };
  let onNewMessageChange = (e: any) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
      </div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
