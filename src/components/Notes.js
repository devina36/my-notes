import React from 'react';
import NoteItem from './NoteItem';
 
function Notes({ notes, onDelete, onArchive, onUnarchive }) {
 if (notes.length === 0) {
    return (
        <p className="kosong">Tidak ada catatan</p>
    );
 }

 return (
   <div className="cl">
     {
       notes.map((note) => (
         <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} {...note} />
       ))
     }
   </div>
 );
}

export default Notes