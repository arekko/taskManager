import axios from "axios";
import {
  CreateTaskParams,
  EditParams,
  GetTasksParams,
  LoginParams
} from "./types";

export class TaskApiService {
  private baseUrl: string = `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=andreivas`;
  private developer: string = "andreivas";

  /**
   * Retrieve the list of tasks
   *
   * @param {GetTasksParams} { page, sortField, sortDirection }
   * @returns
   * @memberof TaskApiService
   */
  async getTasks({ page, sortField, sortDirection }: GetTasksParams) {
    let params: {
      page: number;
      sort_filed?: string;
      sort_direction?: string;
      developer: string;
    } = { page, developer: this.developer };

    if (sortField) {
      params.sort_filed = sortField;
    }
    if (sortDirection) {
      params.sort_direction = sortDirection;
    }

    return await axios({
      method: "get",
      url: `${this.baseUrl}`,
      params
    });
  }

  /**
   * Create new task
   *
   * @param {CreateTaskParams} { username, email, text }
   * @returns
   * @memberof TaskApiService
   */
  async createTask({ username, email, text }: CreateTaskParams) {
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("text", text);

    return await axios({
      method: "post",
      url: `${this.baseUrl}/create`,
      data: data,
      params: { developer: this.developer },
      headers: {
        "content-type": `multipart/form-data`
      }
    });
  }

  /**
   * Login user and retrieve auth token
   *
   * @param {LoginParams} { username, password }
   * @returns
   * @memberof TaskApiService
   */
  async login({ username, password }: LoginParams) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    return await axios({
      method: "post",
      url: `${this.baseUrl}/login`,
      data: data,
      params: {
        developer: this.developer
      },
      headers: {
        "content-type": `multipart/form-data`
      }
    });
  }

  /**
   * Edit the task by id
   *
   * @param {EditParams} { id, text, status }
   * @returns
   * @memberof TaskApiService
   */
  async edit({ id, text, status }: EditParams) {
    const data = new FormData();
    data.append("text", text);
    data.append("status", status.toString()); //TODO: checkit

    return await axios({
      method: "post",
      url: `${this.baseUrl}/edit/${id}`,
      data: data,
      params: {
        developer: this.developer
      },
      headers: {
        "content-type": `multipart/form-data`
      }
    });
  }
}
