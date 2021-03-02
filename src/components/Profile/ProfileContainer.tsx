/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import Profile from "./Profile";
import { getUserProfile } from "./../../redux/profileReducer";

type PathParamsType = {
  userId: string;
};

type MapStateToPropsType = {
  profile: any;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  getUserProfile: (userId: string) => void;
};

type OnPropsType = MapStateToPropsType & MapDispatchToPropsType;

type PropsType = RouteComponentProps<PathParamsType> & OnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;

    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  any,
  RootStateType
>(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
