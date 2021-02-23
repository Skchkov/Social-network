const SET_USER_DATA = "SET_USER_DATA";

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

export type AuthType = {
  userId: any;
  email: any;
  login: any;
  isAuth: boolean;
};

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export type ActionsTypes = AuthActionType;

type AuthActionType = ReturnType<typeof setAuthUserData>;

const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId: any, email: any, login: any) =>
  ({ type: SET_USER_DATA, data: { userId, email, login } } as const);

export default authReducer;
