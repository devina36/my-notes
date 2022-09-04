import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Delete({ id, onDelete }) {
  return (
    <button className="delete" onClick={() => onDelete(id)}>
    <FontAwesomeIcon icon={faTrash}/> 
    </button>
  );
}

export default Delete;
