import React, { useContext } from "react";
import { TaskServiceProvider } from "../App";

export const withTaskService = () => (Wrapper: any) => (props: any) => {
  const taskService = useContext(TaskServiceProvider);
  return <Wrapper {...props} taskService={taskService} />;
};
