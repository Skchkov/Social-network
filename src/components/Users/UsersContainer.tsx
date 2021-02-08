import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state: any) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    follow: (userId: any) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: any) => {
      dispatch(unfollowAC(userId));
    },
    seUsers: (users: any) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
