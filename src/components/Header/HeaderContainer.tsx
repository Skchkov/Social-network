import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import { setAuthUserData } from "./../../redux/authReducer";
import Header from "./Header";

type PathParamsType = {
  data: any;
};

type MapStateToPropsType = {
  isAuth: boolean;
  login: string;
};

type MapDispatchToPropsType = {
  setAuthUserData: any;
};

type onPropsType = MapDispatchToPropsType & MapStateToPropsType;

type PropsType = RouteComponentProps<PathParamsType> & onPropsType;

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response: any) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  any,
  RootStateType
>(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
