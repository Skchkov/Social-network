const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
};

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3,
};

export type ActionsTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType;

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

type FollowActionType = ReturnType<typeof followAC>;
type UnfollowActionType = ReturnType<typeof unfollowAC>;
type SetUsersActionType = ReturnType<typeof setUsersAC>;
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>;
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;

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

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);

export const unfollowAC = (userId: number) =>
  ({
    type: UNFOLLOW,
    userId,
  } as const);

export const setUsersAC = (users: Array<UserType>) =>
  ({ type: SET_USERS, users } as const);

export const setCurrentPageAC = (currentPage: Array<UserType>) =>
  ({ type: SET_CURRENT_PAGE, currentPage } as const);

export const setTotalUsersCountAC = (totalUsersCount: Array<UserType>) =>
  ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } as const);

export default usersReducer;
