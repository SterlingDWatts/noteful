import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import FolderNav from '../FolderNav/FolderNav';
import './FolderPage.css';
import AppContext from '../AppContext';

class FolderPage extends Component {

    static contextType = AppContext

    handleDeleteFolderClick = (event) => {
        event.preventDefault();
        this.context.deleteFolder(this.props.match.params.folderId);
        this.props.history.goBack();
    }

    render() {
        const notes = this.context.notes.find(note => note.folderId === this.props.match.params.folderId)
        return (
            <div className="folder_page">
                <FolderNav selectedFolder={this.props.match.params.folderId} addFolder={ true } />
                <div className="folder_page__notes">
                    <NoteList selectedFolder={this.props.match.params.folderId}/>
                    <button className="add_note_button">Add Note</button>
                    <button 
                        className="delete_folder_button" 
                        disabled={notes}
                        onClick={e => this.handleDeleteFolderClick(e)}
                    >
                        Delete Folder
                    </button>
                </div>
            </div>
        );
    }

}

export default FolderPage;