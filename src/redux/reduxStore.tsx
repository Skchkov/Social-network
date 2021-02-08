import { combineReducers, createStore } from "redux";
import dialogsReducer, { DialogPageType } from "./dialogsReducer";
import profileReducer, { ProfilePageType } from "./profileReducer";
import usersReducer from "./usersReducer";

// export type RootStateType = ReturnType<typeof reducers>

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
};
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
