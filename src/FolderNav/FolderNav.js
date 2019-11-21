import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import './FolderNav.css';

class FolderNav extends Component {
    render() {
        const folders = this.props.folders
            ? this.props.folders.map(folder => <Folder folder={folder} key={folder.id} selectedFolder={this.props.selectedFolder}/>)
            : '';
        return (
            <div className="folder_nav">
                <ul>
                    { folders }
                </ul>
                <div className="add_folder__box">
                    <button className="add_folder__button">Add Folder</button>
                </div>
            </div>
        );
    }
}

FolderNav.defaultProps = {
    folders: null
}

export default FolderNav;