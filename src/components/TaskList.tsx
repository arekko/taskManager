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
    <>
      <ListGroup>
        {[1, 2, 3].map((item: any) => (
          <ListGroup.Item className="mt-1">{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Pagination className="mt-3">{items}</Pagination>
    </>
  );
};
