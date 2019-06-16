import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Task } from "../types";

interface IListItemProps {
  item: Task;
}

export const ListItem: React.FC<IListItemProps> = ({ item }) => {
  return (
    <ListGroup.Item className="mt-1">
      <div>
        <span className="mr-2 username">{item.username}</span>
        <span className="username">{item.email}</span>
      </div>
      <p className="mt-3">{item.text}</p>
    </ListGroup.Item>
  );
};
