import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import FolderNav from '../FolderNav/FolderNav';
import './FolderPage.css';

class FolderPage extends Component {

    render() {
        return (
            <div className="folder_page">
                <FolderNav selectedFolder={this.props.match.params.folderId}/>
                <div className="folder_page__notes">
                    <NoteList selectedFolder={this.props.match.params.folderId}/>
                    <button>Add Note</button>
                </div>
            </div>
        );
    }

}

export default FolderPage;