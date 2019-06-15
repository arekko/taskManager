import * as React from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
      
    </div>
  );
};
