import { combineReducers, createStore } from "redux";
import authReducer, { AuthType } from "./authReducer";
import dialogsReducer, { DialogPageType } from "./dialogsReducer";
import profileReducer, { ProfilePageType } from "./profileReducer";
import usersReducer, { UsersPageType } from "./usersReducer";

// export type RootStateType = ReturnType<typeof reducers>

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  usersPage: UsersPageType;
  auth: AuthType;
};
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
