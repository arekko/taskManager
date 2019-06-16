import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { TaskForm } from "../components/TaskForm";
import { withTaskService } from "../hocs";
import { loadTasks, uploadTask } from "../redux-store/actions/taskActions";

interface ITaskFormContainerProps {
  loadTasks: any;
  uploadTask: any;
  uploading: boolean;
  uploadError: any;
}

export const T: React.FC<ITaskFormContainerProps> = ({
  loadTasks,
  uploadError,
  uploadTask,
  uploading
}) => {
  const onSubmit = async (values: any, { resetForm }: any) => {
    await uploadTask(values);
    resetForm();
    loadTasks();
  };

  return (
    <TaskForm
      onSubmit={onSubmit}
      uploading={uploading}
      uploadError={uploadError}
    />
  );
};

const mapStateToProps = ({ task }: any) => ({
  uploading: task.uploading,
  uploadError: task.uploadError
});

const mapDispatchToProps = (dispatch: any, { taskService }: any) =>
  bindActionCreators(
    {
      loadTasks: loadTasks(taskService),
      uploadTask: uploadTask(taskService)
    },
    dispatch
  );

export const TaskFormContainer = compose(
  withTaskService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(T);
