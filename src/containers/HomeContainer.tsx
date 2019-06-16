import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Home } from "../components/Home";
import { withTaskService } from "../hocs";
import { loadTasks, setPage } from "../redux-store/actions/taskActions";
import { Task } from "../types";

interface IHomeProps {
  loadTasks: () => void;
  loading: boolean;
  tasks: Task[];
  total: number;
  page: number;
  setPage: any
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

  return <Home data={tasks} loading={loading} total={total} page={page} setPage={setPage} />;
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

export const HomeContainer = compose(
  withTaskService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HC);
