import React, { ChangeEvent } from "react";
import { Redirect } from "react-router-dom";
import {
  DialogPageType,
  DialogType,
  MessageType,
} from "../../redux/dialogsReducer";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

type PropsType = {
  dialogsPage: DialogPageType;
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
  isAuth: boolean;
};

const Dialogs = (props: PropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d: DialogType) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m: MessageType) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
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
