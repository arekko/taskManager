import { SortField } from "../../services/types";
import { TaskApiService } from "./../../services/TaskApiService";
import {
  EDIT_TASK_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  SET_PAGE,
  SORT_TASKS,
  UPLOAD_TASK_FAILURE,
  UPLOAD_TASK_REQUEST,
  UPLOAD_TASK_SUCCESS
} from "./../constants";

export const taskRequest = () => ({
  type: FETCH_TASKS_REQUEST
});

export const taskSuccess = (data: any) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: {
    tasks: data.tasks,
    totalTasks: data.total_task_count
  }
});

export const taskFailure = (error: any) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error
});

export const sortTasks = (criteria: SortField) => ({
  type: SORT_TASKS,
  payload: criteria
});

export const loadTasks = (taskApiService: TaskApiService) => () => (
  dispatch: any,
  getState: any
) => {
  dispatch(taskRequest());
  const {
    task: { page, sortField, sortDirection }
  } = getState();
  taskApiService
    .getTasks({ page, sortField, sortDirection })
    .then((data: any) => dispatch(taskSuccess(data.data.message)));
};

export const setPage = (pageNumber: number) => ({
  type: SET_PAGE,
  payload: pageNumber
});

// Uploading

export const uploadTaskRequest = () => ({
  type: UPLOAD_TASK_REQUEST
});

export const uploadTaskSuccess = (data: any) => ({
  type: UPLOAD_TASK_SUCCESS,
  payload: data
});

export const uploadTaskFailure = (error: any) => ({
  type: UPLOAD_TASK_FAILURE,
  payload: error
});

export const uploadTask = (taskApiService: TaskApiService) => ({
  username,
  email,
  text
}: {
  username: string;
  email: string;
  text: string;
}) => (dispatch: any, getState: any) => {
  console.log(username, email, text);

  dispatch(uploadTaskRequest());
  const {
    task: { page, sortField, sortDirection }
  } = getState();
  taskApiService.createTask({ username, email, text }).then((data: any) => {
    console.log(data);

    dispatch(uploadTaskSuccess(data.data));
  });
};

export const editTaskSuccess = (newTask: any) => ({
  type: EDIT_TASK_SUCCESS,
  payload: newTask
});

export const editStatus = (taskApiService: TaskApiService) => ({
  id,
  status
}: {
  id: number;
  status: number;
}) => (dispatch: any, getState: any) => {
  const {
    user: { token }
  } = getState();
  dispatch(editTaskSuccess({ id, status }));
  taskApiService.edit({ id, status, token }).then((data: any) => {
    console.log(data);
    // dispatch(loadTasks(taskApiService)());
  });
};
