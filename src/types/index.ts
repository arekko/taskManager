type Status = "ok" | "error";
type TaskStatus = 0 | 10;
// Task List response

export interface Task {
  id: number;
  username: string;
  email: string;
  text: string;
  status: TaskStatus;
}

export interface Message {
  tasks: Task[];
  total_task_count: number;
}

export interface TaskList {
  status: Status;
  message: Message;
}

// Add task response

export interface CreateTaskResponse {
  status: Status;
  message: Task | CreateTaskErrorMessage;
}

export interface CreateTaskErrorMessage {
  username?: string;
  email?: string;
  text?: string;
}

// Login

export interface LoginResponse {
  status: Status;
  message?: LoginErrorMessage;
}

export interface LoginErrorMessage {
  username?: string;
  password?: string;
}

// Edit

export interface EditResponse {
  status: Status;
  message?: EditErrorMessage;
}

export interface EditErrorMessage {
  token: string;
}
