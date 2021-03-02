import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import {
  unfollowSuccess,
  setCurrentPage,
  followSuccess,
  UserType,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader";
import Users from "./Users";

type PropsType = {
  users: Array<UserType>;
  setUsers: (users: Array<UserType>) => void;
  setTotalUsersCount: (totalCount: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  followingInProgress: any;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
};

class UsersAPIComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersAPIComponent);

export default UsersContainer;
