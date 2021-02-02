import { combineReducers, createStore } from "redux";
import dialogsReducer, { DialogPageType } from "./dialogsReducer";
import profileReducer, { ProfilePageType } from "./profileReducer";

// export type RootStateType = ReturnType<typeof reducers>

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
};
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducers);
// @ts-ignore
window.store = store;
export default store;
