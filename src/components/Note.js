import React from "react";

function Note({ title, date, text }) {
  return (
    <div className="note">
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p className="text">{text}</p>
    </div>
  );
}

export default Note;
