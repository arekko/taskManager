import { createReducer, updateObject } from "./reducerUtilities";

const initialState = {
  tasks: [],
  page: 1,
  loading: false,
  error: undefined,
  totalTasks: undefined,
  sortField: "username",
  sortDirection: "asc"
};

const fetchTasksRequest = (state: any) =>
  updateObject(state, {
    loading: true
  });

const fetchTasksSuccess = (state: any, { payload }: any) =>
  updateObject(state, {
    loading: false,
    tasks: payload.tasks,
    totalTasks: payload.totalTasks
  });

const fetchTasksFailure = (state: any, { payload }: any) =>
  updateObject(state, {
    loading: false,
    erorr: payload
  });

const setPage = (state: any, { payload }: any) =>
  updateObject(state, {
    page: payload
  });

const sortTasks = (state: any, { payload }: any) =>
  updateObject(state, {
    sortField: payload
  });

export default createReducer(initialState, {
  FETCH_TASKS_REQUEST: fetchTasksRequest,
  FETCH_TASKS_SUCCESS: fetchTasksSuccess,
  FETCH_TASKS_FAILURE: fetchTasksFailure,
  SET_PAGE: setPage,
  SORT_TASKS: sortTasks
});
