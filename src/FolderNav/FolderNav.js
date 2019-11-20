import React, { Component } from 'react';
import './FolderNav.css';

class FolderNav extends Component {
    render() {
        const folders = this.props.folders
            ? this.props.folders.map(folder => <li>{folder.name}</li>)
            : '';
        return (
            <div className="folder_nav">
                <ul>
                    { folders }
                </ul>
                <button>Add Folder</button>
            </div>
        );
    }
}

FolderNav.defaultProps = {
    folders: null
}

export default FolderNav;