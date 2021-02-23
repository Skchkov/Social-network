import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  UserType,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader";
import Users from "./Users";

type PropsType = {
  users: Array<UserType>;
  setUsers: (users: Array<UserType>) => void;
  setTotalUsersCount: (totalCount: any) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  toggleIsFetching: (isFetching: any) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response: any) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response: any) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged} //<- props
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users: any) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber: any) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount: any) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching: any) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
