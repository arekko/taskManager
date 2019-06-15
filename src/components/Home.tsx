import * as React from "react";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <Row className="justify-content-md-center mt-3">
      <Col md="6">
        <Jumbotron>
          <h4 className="mb-3">Create new task</h4>
          <TaskForm />
        </Jumbotron>
        <Jumbotron>
          <h4 className="mb-3">Tasks</h4>
          <TaskList />
        </Jumbotron>
      </Col>
    </Row>
  );
};
