import * as React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

interface IHeaderProps {
  logout: () => void;
  user: any;
}

export const Header: React.FC<IHeaderProps> = ({ logout, user }) => {
  return (
    <>
      <Navbar bg="light" variant="light" className="justify-content-between">
        <Navbar.Brand href="#home">TaskManager</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          {!user && (
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          )}
          {user && (
            <Button
              variant="outline-success"
              className="ml-3"
              onClick={() => {
                localStorage.clear();
                logout();
              }}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Navbar>
    </>
  );
};
