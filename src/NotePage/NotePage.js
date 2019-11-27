import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NoteBox from '../NoteBox/NoteBox';
import STORE from '../dummy-store';
import './NotePage.css';

class NotePage extends Component {
    render() {
        const note = STORE.notes.find(note =>
            note.id === this.props.match.params.noteId
        );
        const folder = STORE.folders.find(folder => folder.id === note.folderId);
        return (
            <div className="note_page">
                <div className="back_to_folders_nav">
                    <div className="go_back__box">
                        <button 
                            className="go_back"
                            onClick={this.props.onClickBack}
                        >
                            Go Back
                        </button>
                    </div>
                    <h2>{folder.name}</h2>
                </div>
                <div className="note_box__box">
                    <ul><NoteBox note={note}/></ul>
                    <p>{note.content}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(NotePage);