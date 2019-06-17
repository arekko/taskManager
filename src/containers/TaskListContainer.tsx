import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import { TaskList } from "../components/TaskList";
import { withTaskService } from "../hocs";
import {
  editStatus,
  loadTasks,
  setPage,
  sortTasks
} from "../redux-store/actions/taskActions";
import { Task } from "../types";

interface ITaskListContainerProps extends RouteComponentProps {
  loadTasks: () => void;
  loading: boolean;
  tasks: Task[];
  total: number;
  page: number;
  setPage: any;
  sortTasks: any;
  editStatus: any;
  user: any;
}

export const HC: React.FC<ITaskListContainerProps> = ({
  loadTasks,
  loading,
  tasks,
  total,
  page,
  setPage,
  sortTasks,
  editStatus,
  user,
  history
}) => {
  useEffect(() => {
    loadTasks();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    loadTasks();
  };

  const handleSort = (criteria: string) => {
    sortTasks(criteria);
    loadTasks();
  };

  const handleStatus = (id: number, status: number) => {
    if (user) {
      editStatus({ id, status });
      return;
    }
    history.push("/login");

    // loadTasks();
  };

  return loading || !tasks ? (
    <div className="spinner">
      <Spinner
        className="justify-content"
        animation="border"
        variant="primary"
      />
    </div>
  ) : (
    <TaskList
      data={tasks}
      page={page}
      total={total}
      handlePageChange={handlePageChange}
      handleSort={handleSort}
      editStatus={handleStatus}
    />
  );
};

const mapStateToProps = ({ task, user }: any) => ({
  tasks: task.tasks,
  loading: task.loading,
  page: task.page,
  total: task.totalTasks,
  user: user.token
});

const mapDispatchToProps = (dispatch: any, { taskService }: any) =>
  bindActionCreators(
    {
      loadTasks: loadTasks(taskService),
      editStatus: editStatus(taskService),
      setPage,
      sortTasks
    },
    dispatch
  );

export const TaskListContainer = compose(
  withTaskService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HC);
