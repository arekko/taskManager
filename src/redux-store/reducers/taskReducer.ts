import { uploadTaskFailure } from "../actions/taskActions";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState = {
  tasks: [],
  page: 1,
  loading: false,
  error: undefined,
  totalTasks: undefined,
  sortField: "username",
  sortDirection: "asc",
  uploading: false,
  uploadError: undefined
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

// Uploading

const uploadTaskRequest = (state: any) =>
  updateObject(state, {
    uploading: true
  });

const uploadTaskSuccess = (state: any, { payload }: any) =>
  updateObject(state, {
    uploading: false
  });

// Edit

const edittask = (state: any, { payload }: any) => {
  console.log(state);

  const itemIndex = state.tasks.findIndex(({ id }: any) => id === payload.id);
  const item = state.tasks[itemIndex];

  const newItem = {
    ...item,
    status: payload.status
  };
  return updateObject(state, {
    tasks: [
      ...state.tasks.slice(0, itemIndex),
      newItem,
      ...state.tasks.slice(itemIndex + 1)
    ]
  });
};

export default createReducer(initialState, {
  FETCH_TASKS_REQUEST: fetchTasksRequest,
  FETCH_TASKS_SUCCESS: fetchTasksSuccess,
  FETCH_TASKS_FAILURE: fetchTasksFailure,
  SET_PAGE: setPage,
  SORT_TASKS: sortTasks,
  UPLOAD_TASK_REQUEST: uploadTaskRequest,
  UPLOAD_TASK_SUCCESS: uploadTaskSuccess,
  UPLOAD_TASK_FAILURE: uploadTaskFailure,
  EDIT_TASK_SUCCESS: edittask
});
