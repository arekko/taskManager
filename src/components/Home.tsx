import * as React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TaskListContainer } from "../containers";
import { SortButton } from "./SortButton";
import { TaskForm } from "./TaskForm";

interface Props {}

export const Home: React.FC<Props> = ({}) => {

  return (
    <Row className="justify-content-md-center mt-3">
      <Col md="6">
        <h4 className="mb-3">Create new task</h4>
        <TaskForm />
        <h4 className="mb-3">Tasks</h4>
        <TaskListContainer />
      </Col>
    </Row>
  );
};
