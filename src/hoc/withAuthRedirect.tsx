import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootStateType } from "../redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean;
};

let mapStateToPropsForRedirect = (
    state: RootStateType
): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let { isAuth, ...restProps } = props;

        if (!isAuth) return <Redirect to={"/login"} />;
        return <Component {...(restProps as T)} />;
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    );

    return ConnectedAuthRedirectComponent;
}
