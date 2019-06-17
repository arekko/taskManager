import * as React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TaskListContainer } from "../containers";
import { TaskFormContainer } from "../containers/TaskFormContainer";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }) => {
  return (
    <Row className="justify-content-md-center mt-3">
      <Col md="6">
        <h5 className="mb-3">Create new task</h5>
        <TaskFormContainer />
        <h5 className="mb-3">Tasks</h5>
        <TaskListContainer history={history} />
      </Col>
    </Row>
  );
};
