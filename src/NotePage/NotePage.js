import React, { Component } from 'react';
import NoteBox from '../NoteBox/NoteBox';
import STORE from '../dummy-store';

class NotePage extends Component {
    render() {
        const note = STORE.notes.find(note =>
            note.id === this.props.match.params.noteId
        )
        return (
            <div className="note_page">
                <div className="back_to_folders_nav">
                    <button className="go-back">Go Back</button>
                </div>
                <div className="note_box__box">
                    <NoteBox note={note}/>
                    <p>{note.content}</p>
                </div>
            </div>
        );
    }
}

export default NotePage;