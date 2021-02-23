/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import Profile from "./Profile";
import { setUserProfileAC } from "../../redux/profileReducer";

type PathParamsType = {
  userId: string;
};

type MapStateToPropsType = {
  profile: any;
};

type MapDispatchToPropsType = {
  setUserProfileAC: any;
};

type OnPropsType = MapStateToPropsType & MapDispatchToPropsType;

type PropsType = RouteComponentProps<PathParamsType> & OnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response: any) => {
        this.props.setUserProfileAC(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  any,
  RootStateType
>(mapStateToProps, { setUserProfileAC })(WithUrlDataContainerComponent);
