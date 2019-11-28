import React, { Component } from 'react';
import NoteBox from '../NoteBox/NoteBox';
import AppContext from '../AppContext';
import STORE from '../dummy-store';
import './NotePage.css';

class NotePage extends Component {

    static contextType = AppContext;

    handleGoBack = () => {
        this.props.history.goBack()
    }

    render() {
        const note = STORE.notes.find(note => note.id === this.props.match.params.noteId);
        const folder = STORE.folders.find(folder => folder.id === note.folderId);
        return (
            <div className="note_page">
                <div className="back_to_folders_nav">
                    <div className="go_back__box">
                        <button 
                            className="go_back"
                            onClick={this.handleGoBack}
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

export default NotePage;