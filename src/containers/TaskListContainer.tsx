import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { TaskList } from "../components/TaskList";
import { withTaskService } from "../hocs";
import { loadTasks, setPage } from "../redux-store/actions/taskActions";
import { Task } from "../types";

interface IHomeProps {
  loadTasks: () => void;
  loading: boolean;
  tasks: Task[];
  total: number;
  page: number;
  setPage: any;
}

export const HC: React.FC<IHomeProps> = ({
  loadTasks,
  loading,
  tasks,
  total,
  page,
  setPage
}) => {
  useEffect(() => {
    loadTasks();
  }, []);

  console.log(tasks, loading);

  const handelPageChange = (pageNumber: number) => {
    setPage(pageNumber);
    loadTasks();
  };

  return loading || !tasks ? (
    <Spinner animation="border" />
  ) : (
    <TaskList
      data={tasks}
      page={page}
      total={total}
      handlePageChange={handelPageChange}
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
      setPage
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
