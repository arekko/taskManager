import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";

interface Props {
  sortByCriteria: () => void;
}

export const SortButton: React.FC<Props> = ({ sortByCriteria }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={sortByCriteria}>Username</Dropdown.Item>
        <Dropdown.Item onClick={sortByCriteria}>Email</Dropdown.Item>
        <Dropdown.Item onClick={sortByCriteria}>Status</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
