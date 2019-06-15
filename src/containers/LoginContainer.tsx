import * as React from "react";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import { LoginForm } from "../components/LoginForm";

interface Props {}

export const LoginContainer: React.FC<Props> = () => {
  return (
    <Row className="justify-content-md-center mt-3">
      <Col md="4">
        <Jumbotron>
          <h4 className="mb-3">Login</h4>
          <LoginForm />
        </Jumbotron>
      </Col>
    </Row>
  );
};
