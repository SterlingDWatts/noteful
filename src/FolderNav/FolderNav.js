import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Folder from '../Folder/Folder';
import AppContext from '../AppContext';
import FolderError from '../FolderError/FolderError';
import './FolderNav.css';

class FolderNav extends Component {

    static contextType = AppContext;

    render() {
        const folders = this.context.folders
            ? this.context.folders.map(folder => (
                <FolderError  key={folder.id} >
                    <Folder folder={folder} selectedFolder={this.props.selectedFolder}/>
                </FolderError>
            ))
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

FolderNav.propTypes = {
    addFolder: PropTypes.bool,
    selectedFolder: PropTypes.string
}

FolderNav.defaultProps = {
    folders: null,
    selectedFolder: null
}

export default FolderNav;