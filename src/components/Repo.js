import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function Repo({ repos }) {
  if (!repos || repos.length <= 0) {
    return null;
    // return alert('Please, insert user.')
  }
  return (
    <div>
      <p>REPOSITORIES:</p>
      <ListGroup>
        {repos.map((item) => (
          <ListGroupItem key={item.id}>{item.name}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default Repo;

Repo.propTypes = {
  repos: propTypes.array,
};
