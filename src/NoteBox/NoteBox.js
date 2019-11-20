import React, { Component } from 'react';
import './NoteBox.css';

class NoteBox extends Component {
    render() {
        const dateTime = new Date(this.props.note.modified);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateString = new Intl.DateTimeFormat('en-US', options).format(dateTime);
        const modifiedOn = 'Date modified on ' + dateString;
        return (
            <li className="note_box">
                <h2 className="note_name">{this.props.note.name}</h2>
                <div>
                    <span>{ modifiedOn }</span>
                    <button>Delete Note</button>
                </div>
            </li>
        );
    }
}

export default NoteBox;