import React from "react";
import BodyNotes from './components/BodyNotes'
import Header from "./components/Header";
import { getData } from "./utils/data";

class App extends React.Component {
  constructor(props) {
    super(props);

    const notes = getData();

    this.state = {
      notes: notes,
      querySearch: '',
    }

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, text }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            text,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onArchiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note) });
  }

  onUnarchiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
  }

  onSearchEventHandler({ query }) {
    this.setState(() => {
      return { querySearch: query }
    });
  }

  render() {
    return (
      <div>
        <Header searchNote={this.onSearchEventHandler} />
        <BodyNotes addNote={this.onAddNoteEventHandler} notes={this.state.notes} querySearch={this.state.querySearch} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchive={this.onUnarchiveHandler} />
      </div>
    );
  }
}

export default App;
