import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import './FolderNav.css';

class FolderNav extends Component {

    static contextType = AppContext;

    render() {
        const folders = this.context.folders
            ? this.context.folders.map(folder => <Folder folder={folder} key={folder.id} selectedFolder={this.props.selectedFolder}/>)
            : '';
        const addFolder = this.props.addFolder
            ? (
                <div className="add_folder__box">
                    <Link to="/add_folder"><button className="add_folder__button">Add Folder</button></Link>
                </div>
            )
            : <div></div>;
        return (
            <div className="folder_nav">
                <ul className="folder_nav_ul">
                    { folders }
                </ul>
                { addFolder }
            </div>
        );
    }

}

FolderNav.defaultProps = {
    folders: null
}

export default FolderNav;