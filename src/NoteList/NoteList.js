import React, { Component } from 'react';
import NoteBox from '../NoteBox/NoteBox';
import './NoteList.css';

class NoteList extends Component {
    render() {
        const notes = this.props.notes
            ? this.props.notes.map(note => <NoteBox note={note} key={note.id} />)
            : '';
        return (
            <ul className="note_list">
                { notes }
            </ul>
        );
    }
}

export default NoteList;