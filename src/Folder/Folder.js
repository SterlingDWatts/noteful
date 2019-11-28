import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

class Folder extends Component {
    render() {
        const listItem = (this.props.selectedFolder === this.props.folder.id)
        ? (<li className="folder_list_item selected">
                <Link to={`/folder/${this.props.folder.id}`}>{this.props.folder.name}</Link>
            </li>)
        : (<li className="folder_list_item">
                <Link to={`/folder/${this.props.folder.id}`}>{this.props.folder.name}</Link>
            </li>);
        return listItem;
    }
}

Folder.defaultProps = {
    selectedFolder: null
}

export default Folder;