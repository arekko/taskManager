import TaskApiService from "../../services";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "./../constants";

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = (message: any) => ({
  type: LOGIN_USER_SUCCESS,
  payload: message
});

export const loginUserFailure = (error: any) => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});

export const logout = () => ({ type: LOGOUT_USER });

export const login = (taskApiService: TaskApiService, history: any) => ({
  username,
  password
}: {
  username: string;
  password: string;
}) => (dispatch: any) => {
  console.log(history);

  dispatch(loginUserRequest());

  taskApiService.login({ username, password }).then((data: any) => {
    if (data.data.message.token) {
      localStorage.setItem("token", data.data.message.token);
      dispatch(loginUserSuccess(data.data.message.token));
      history.push("/");
    }
  });
};
