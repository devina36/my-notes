import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      maxChar: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onTextChangeEventHandler = this.onTextChangeEventHandler.bind(this);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      }
    });
  }

  onTextChangeEventHandler(event) {
    this.setState(() => {
      return {
        text: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: '',
        text: '',
      }
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="max">Sisa karakter: {this.state.maxChar - this.state.title.length}</p>
          <input className="title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="text" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.text} onChange={this.onTextChangeEventHandler} required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default Input;
