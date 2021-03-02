import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import { getAuthUserData } from "./../../redux/authReducer";
import Header from "./Header";

type PathParamsType = {
  data: any;
};

type MapStateToPropsType = {
  isAuth: boolean;
  login: string;
};

type MapDispatchToPropsType = {
  getAuthUserData: any;
};

type onPropsType = MapDispatchToPropsType & MapStateToPropsType;

type PropsType = RouteComponentProps<PathParamsType> & onPropsType;

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
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
  getAuthUserData,
})(HeaderContainer);
