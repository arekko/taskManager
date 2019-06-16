import * as React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Task } from "../types";
import { SortButton } from "./SortButton";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { TaskListContainer } from "../containers/TaskListContainer";

interface Props {
  data: Task[];
  loading: boolean;
  total: number;
  page: number;
  setPage: any;
}

export const Home: React.FC<Props> = ({
  data,
  loading,
  total,
  page,
  setPage
}) => {
  const mock = () => console.log("sort");

  return (
    <Row className="justify-content-md-center mt-3">
      <Col md="6">
        <h4 className="mb-3">Create new task</h4>
        <TaskForm />
        <h4 className="mb-3">Tasks</h4>
        <SortButton sortByCriteria={mock} />
        <TaskListContainer />
      </Col>
    </Row>
  );
};
