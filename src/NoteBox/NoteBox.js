import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import "./NoteBox.css";

class NoteBox extends Component {
  static contextType = AppContext;

  render() {
    const dateTime = new Date(this.props.note.modified);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const dateString = new Intl.DateTimeFormat("en-US", options).format(
      dateTime
    );
    const modifiedOn = "Date modified on " + dateString;
    return (
      <li className="note_box">
        <Link to={`/note/${this.props.note.id}`} className="link_to_note">
          <h2 className="note_name">{this.props.note.name}</h2>
        </Link>
        <div>
          <span>{modifiedOn}</span>
          {this.props.showDeleteButton && (
            <button
              className="delete_note__button"
              onClick={() => {
                this.context.deleteNote(this.props.note.id);
              }}
            >
              Delete Note
            </button>
          )}
        </div>
      </li>
    );
  }
}

NoteBox.defaultProps = {
  note: {
    name: "",
    id: "",
    contents: "",
    modified: ""
  },
  showDeleteButton: true
};

NoteBox.propTypes = {
  note: (props, propName, componentName) => {
    const prop = props[propName];

    if (!prop) {
      return new Error(
        `${propName} is required in ${componentName}. Validation Failed.`
      );
    }

    if (!prop.name || !prop.id || !prop.modified) {
      return new Error(
        `${propName} must have a 'name', 'id', 'modified' attributes in ${componentName}.`
      );
    }

    if (
      typeof prop.name != "string" ||
      prop.name.length < 4 ||
      prop.name.length > 10
    ) {
      return new Error(
        `'name' attribute of ${propName} must be of type string and be between 4 - 10 charecters in ${componentName}.`
      );
    }

    if (typeof prop.id != "string") {
      return new Error(
        `'id' attribute of ${propName} must be of type 'string' in ${componentName}`
      );
    }

    if (typeof prop.modified != "string") {
      return new Error(
        `'modified' attribute of ${propName} must be of type 'string' in ${componentName}`
      );
    }
  }
};

export default NoteBox;
