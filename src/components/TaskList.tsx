import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";

interface Props {}

export const TaskList: React.FC<Props> = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <ListGroup>
        {[1, 2, 3, 4, 5, 6, 7].map((item: any) => (
          <ListGroup.Item>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Pagination>{items}</Pagination>
    </div>
  );
};
