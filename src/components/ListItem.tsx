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
        <span className="mr-2">{item.username}</span>
        <span>{item.email}</span>
      </div>
      <h5 className="mt-3">{item.text}</h5>
    </ListGroup.Item>
  );
};
