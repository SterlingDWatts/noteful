import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';
import './Folder.css';

class Folder extends Component {

    static contextType = AppContext;

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
    selectedFolder: null,
    id: '',
    name: ''
}

Folder.propTypes = {
    selectedFolder: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Folder;