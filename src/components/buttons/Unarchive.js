import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Unarchive({ id, onUnarchive }) {
  return (
    <button className="unarchive" onClick={() => onUnarchive(id)}>
    <FontAwesomeIcon icon={faRefresh} />
    </button>
  );
}

export default Unarchive;
