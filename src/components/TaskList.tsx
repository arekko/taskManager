// import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-js-pagination";
import { Task } from "../types";
import { pageCounter } from "../utils/pageCounter";
import { ListItem } from "./ListItem";
import { SortButton } from "./SortButton";

interface Props {
  data: Task[];
  total: number;
  page: number;
  handlePageChange: any;
  handleSort: any;
}

export const TaskList: React.FC<Props> = ({
  data,
  total,
  page,
  handlePageChange,
  handleSort
}) => {
  // const handlePageChange = (pageNumber: number) => setPage(pageNumber);

  return (
    <>
      <SortButton handleSort={handleSort} />
      <ListGroup className="mb-3">
        {data.map((item: Task) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ListGroup>

      <Pagination
        activePage={page}
        itemsCountPerPage={3}
        totalItemsCount={pageCounter(total)}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        hideNavigation={true}
      />

      {/* <Pagination className="mt-3">{items}</Pagination> */}
    </>
  );
};
