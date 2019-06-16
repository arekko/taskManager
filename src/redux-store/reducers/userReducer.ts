import { createReducer, updateObject } from "./reducerUtilities";

const initialState = {
  token: undefined,
  loading: false,
  error: undefined,
  validationErrors: undefined
};

// User

const loginUserRequest = (state: any) =>
  updateObject(state, {
    loading: true
  });

const loginUserSuccess = (state: any, { payload }: any) =>
  updateObject(state, {
    loading: false,
    token: payload
  });

const loginUserFailure = (state: any, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

const logoutUser = (state: any, { payload }: any) =>
  updateObject(state, {
    token: undefined
  });

export default createReducer(initialState, {
  LOGIN_USER_REQUEST: loginUserRequest,
  LOGIN_USER_SUCCESS: loginUserSuccess,
  LOGIN_USER_FAILURE: loginUserFailure,
  LOGOUT_USER: logoutUser
});
