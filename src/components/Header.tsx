import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
