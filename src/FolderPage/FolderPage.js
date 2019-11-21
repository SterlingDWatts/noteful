import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import FolderNav from '../FolderNav/FolderNav';
import STORE from '../dummy-store';
import './FolderPage.css';

class FolderPage extends Component {
    render() {
        const folder = STORE.folders.find(folder =>
            folder.id === this.props.match.params.folderId     
        );
        const notes = STORE.notes.filter(note => note.folderId === this.props.match.params.folderId)
        return (
            <div className="folder_page">
                <FolderNav folders={STORE.folders} selectedFolder={folder.id}/>
                <div className="folder_page__notes">
                    <NoteList notes={notes} />
                    <button>Add Note</button>
                </div>
            </div>
        );
    }
}

export default FolderPage;