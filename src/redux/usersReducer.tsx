import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IN_FOLLOWING_PROGRESS = "TOGGLE_IN_FOLLOWING_PROGRESS";

export type LocationType = {
  city: string;
  country: string;
};

export type UserType = {
  id: number;
  photoUrl: string;
  status: string;
  fullName: string;
  followed: boolean;
  location: LocationType;
};

export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: any;
};

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export type ActionsTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleIsFetchingActionType
  | ToggleInFollowingProgress;

// type FollowActionType = {
//   type: "FOLLOW";
//   userId: any;
// };
// type UnfollowActionType = {
//   type: "UNFOLLOW";
//   userId: any;
// };
// type SetUsersActionType = {
//   type: "SET_USERS";
//   users: any;
//   //userId: any;
// };

type FollowActionType = ReturnType<typeof followSuccess>;
type UnfollowActionType = ReturnType<typeof unfollowSuccess>;
type SetUsersActionType = ReturnType<typeof setUsers>;
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;
type ToggleInFollowingProgress = ReturnType<typeof toggleFollowingProgress>;

const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserType) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: UserType) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IN_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (id: string) => id !== action.userId
            ),
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId: number) =>
  ({ type: FOLLOW, userId } as const);

export const unfollowSuccess = (userId: number) =>
  ({
    type: UNFOLLOW,
    userId,
  } as const);

export const setUsers = (users: Array<UserType>) =>
  ({ type: SET_USERS, users } as const);

export const setCurrentPage = (currentPage: number) =>
  ({ type: SET_CURRENT_PAGE, currentPage } as const);

export const setTotalUsersCount = (totalUsersCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } as const);

export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: TOGGLE_IS_FETCHING, isFetching } as const);

export const toggleFollowingProgress = (isFetching: boolean, userId: any) =>
  ({ type: TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userId } as const);

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
