import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { TaskList } from "../components/TaskList";
import { withTaskService } from "../hocs";
import {
  loadTasks,
  setPage,
  sortTasks
} from "../redux-store/actions/taskActions";
import { Task } from "../types";

interface IHomeProps {
  loadTasks: () => void;
  loading: boolean;
  tasks: Task[];
  total: number;
  page: number;
  setPage: any;
  sortTasks: any;
}

export const HC: React.FC<IHomeProps> = ({
  loadTasks,
  loading,
  tasks,
  total,
  page,
  setPage,
  sortTasks
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

  return loading || !tasks ? (
    <Spinner animation="border" />
  ) : (
    <TaskList
      data={tasks}
      page={page}
      total={total}
      handlePageChange={handlePageChange}
      handleSort={handleSort}
    />
  );
};

const mapStateToProps = ({ task }: any) => ({
  tasks: task.tasks,
  loading: task.loading,
  page: task.page,
  total: task.totalTasks
});

const mapDispatchToProps = (dispatch: any, { taskService }: any) =>
  bindActionCreators(
    {
      loadTasks: loadTasks(taskService),
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
