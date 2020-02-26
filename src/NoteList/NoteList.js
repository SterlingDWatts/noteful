import React, { Component } from 'react';
import PropType from 'prop-types';
import NoteBox from '../NoteBox/NoteBox';
import AppContext from '../AppContext';
import NoteError from '../NoteError/NoteError';
import './NoteList.css';

class NoteList extends Component {

    static defaultProps = {
        selectedFolder: null,
    }

    static contextType = AppContext;

    render() {
        const notes = (this.context.notes.length > 0)
            ? this.context.notes.map(note => (
                <NoteError key={note.id} >
                    <NoteBox note={note} />
                </NoteError>
            ))
            : <li> </li>;
        const filteredNotes = this.props.selectedFolder && (this.context.notes.length > 0)
            ? this.context.notes
                .filter(note => note.folderId === this.props.selectedFolder)
                .map(note => (
                    <NoteError key={note.id} >
                        <NoteBox note={note} />
                    </NoteError>
                ))
            : notes;
        return (
            <ul className="note_list">
                { filteredNotes }
            </ul>
        );
    }

}

NoteList.propType = {
    selectedFolder: PropType.string
}

export default NoteList;