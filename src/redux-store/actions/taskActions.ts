import { SortField } from "../../services/types";
import { TaskApiService } from "./../../services/TaskApiService";
import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  SET_PAGE,
  SORT_TASKS
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
