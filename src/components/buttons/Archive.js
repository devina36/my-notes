import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Archive({ id, onArchive }) {
  return (
    <button className="archive" onClick={() => onArchive(id)}>
    <FontAwesomeIcon icon={faThumbTack}/>
    </button>
  );
}

export default Archive;
