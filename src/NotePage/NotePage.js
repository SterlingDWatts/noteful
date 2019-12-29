import React, { Component } from 'react';
import NoteBox from '../NoteBox/NoteBox';
import AppContext from '../AppContext';
import NoteError from '../NoteError/NoteError';
import './NotePage.css';

class NotePage extends Component {

    static contextType = AppContext;

    handleGoBack = () => {
        this.props.history.goBack()
    }

    render() {
        const note = this.context.notes.find(note => note.id === this.props.match.params.noteId);
        const folder = this.context.folders.find(folder => folder.id === note.folderId);
        return (
            <NoteError>
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
                        <h2>{folder && folder.name}</h2>
                    </div>
                    <div className="note_box__box">
                        <ul>{note && (<NoteBox note={note}/>)}</ul>
                        <p>{note && note.content}</p>
                    </div>
                </div>
            </NoteError>
        );
    }

}

export default NotePage;
