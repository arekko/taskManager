import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Task } from "../types";

interface IListItemProps {
  item: Task;
}

export const ListItem: React.FC<IListItemProps> = ({ item }) => {
  return (
    <ListGroup.Item className="mt-1">
      <div className="task-item">
        <div>
          <span className="mr-2 username">{item.username}</span>
          <span className="username">{item.email}</span>
        </div>

        <span
          onClick={() => console.log(item.id)}
          className={
            item.status === 0
              ? "task-status unfinished"
              : "task-status unfinished"
          }
        >
          {item.status === 0 ? "Unfinished" : "Done"}
        </span>
      </div>
      <p className={item.status === 10 ? "mt-3 text-done" : "mt-3"}>
        {item.text}
      </p>
    </ListGroup.Item>
  );
};
