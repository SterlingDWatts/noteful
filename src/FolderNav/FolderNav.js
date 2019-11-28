import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import AppContext from '../AppContext';
import './FolderNav.css';

class FolderNav extends Component {

    static contextType = AppContext;

    render() {
        const folders = this.context.folders
            ? this.context.folders.map(folder => <Folder folder={folder} key={folder.id} selectedFolder={this.props.selectedFolder}/>)
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