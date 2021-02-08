const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type LocationType = {
  city: string;
  country: string;
};

export type PostType = {
  id: number;
  photoUrl: string;
  status: string;
  fullName: string;
  followed: boolean;
  location: LocationType;
};

export type UsersPageType = {
  users: Array<PostType>;
};

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
      followed: false,
      fullName: "Nikita",
      status: "Dead inside",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
      followed: true,
      fullName: "Misha",
      status: "ez for me",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
      followed: false,
      fullName: "Andrew",
      status: "Your best choice",
      location: { city: "Kiev", country: "Ukraine" },
    },
  ],
};

export type ActionsTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType;

type FollowActionType = {
  type: "FOLLOW";
  userId: any;
};
type UnfollowActionType = {
  type: "UNFOLLOW";
  userId: any;
};
type SetUsersActionType = {
  type: "SET_USERS";
  users: any;
  //userId: any;
};

const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
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

export const followAC = (userId: any) => ({ type: FOLLOW, userId } as const);

export const unfollowAC = (userId: any) =>
  ({
    type: UNFOLLOW,
    userId,
  } as const);

export const setUsersAC = (users: any) => ({ type: SET_USERS, users });
export default usersReducer;
