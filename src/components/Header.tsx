import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Login</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
