import React from "react";
import Input from "./Input";
import Notes from "./Notes";

function Body({ addNote, notes, querySearch, onDelete, onArchive, onUnarchive}) {
  const unarchiveNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
  const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

  return (
    <div className="wrapper">
      <Input addNote={addNote} />
      <div className="wrap">
        <div className="aktif">
          <h2>Catatan Aktif</h2>
          <Notes notes={unarchiveNotes} onDelete={onDelete} onArchive={onArchive} />
        </div>
        <div className="arsip">
          <h2>Arsip</h2>
          <Notes notes={archiveNotes} onDelete={onDelete} onUnarchive={onUnarchive} />
        </div>
      </div>
    </div>
  );
}

export default Body;
