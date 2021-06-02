/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import Profile from "./Profile";
import { getUserProfile, ProfilePageType } from "./../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
    userId: string;
};

type MapStateToPropsType = {
    profile: ProfilePageType | null;
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

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, any, RootStateType>(
        mapStateToProps,
        { getUserProfile }
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
