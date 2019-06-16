import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";

interface Props {
  handleSort: (criteria: string) => void;
}

export const SortButton: React.FC<Props> = ({ handleSort }) => {
  return (
    <Dropdown className="mb-3">
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSort("username")}>
          Username
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("email")}>Email</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("status")}>
          Status
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
