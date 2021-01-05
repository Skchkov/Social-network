import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { RootStateType } from "./redux/state";

type PropsType = {
  state: RootStateType;
};

const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
