export interface GetTasksParams {
  page: number;
  sortField?: SortField;
  sortDirection?: SortDirection;
}

export type SortField = "id" | "username" | "email" | "status";
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
  status: number;
  token: any
}
