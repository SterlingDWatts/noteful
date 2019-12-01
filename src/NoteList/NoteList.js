import React, { Component } from 'react';
import NoteBox from '../NoteBox/NoteBox';
import AppContext from '../AppContext';
import './NoteList.css';

class NoteList extends Component {

    static defaultProps = {
        selectedFolder: null,
    }

    static contextType = AppContext;

    render() {
        const notes = (this.context.notes.length > 0)
            ? this.context.notes.map(note => <NoteBox note={note} key={note.id} />)
            : <li> </li>;
        const filteredNotes = this.props.selectedFolder && (this.context.notes.length > 0)
            ? this.context.notes
                .filter(note => note.folderId === this.props.selectedFolder)
                .map(note => <NoteBox note={note} key={note.id} />)
            : notes;
        return (
            <ul className="note_list">
                { filteredNotes }
            </ul>
        );
    }

}

export default NoteList;