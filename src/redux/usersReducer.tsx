const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
};

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

export type ActionsTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleIsFetchingActionType;

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

type FollowActionType = ReturnType<typeof follow>;
type UnfollowActionType = ReturnType<typeof unfollow>;
type SetUsersActionType = ReturnType<typeof setUsers>;
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;

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

    default:
      return state;
  }
};

// type AddPostActionType = {
//   type: "ADD-POST";
//   newPostText: string;
// };

// type UpdateNewPostTextActionType = {
//   type: "UPDATE-NEW-POST-TEXT";
//   newText: string;
// };

export const follow = (userId: number) => ({ type: FOLLOW, userId } as const);

export const unfollow = (userId: number) =>
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

export default usersReducer;
