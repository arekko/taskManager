export interface GetTasksParams {
  page: number;
  sortField?: SortField;
  sortDirection?: SortDirection;
}

type SortField = "id" | "username" | "email" | "status";
type SortDirection = "asc" | "desc";

export interface CreateTaskParams {
  username: string;
  email: string;
  text: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface EditParams {
  id: number;
  text: string;
  status: number;
}
