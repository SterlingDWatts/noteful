import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import FolderNav from '../FolderNav/FolderNav';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home_page">
                <FolderNav folders={this.props.folders} selectedFolder={null}/>
                <div className="home_page__notes">
                    <NoteList />
                    <button>Add Note</button>
                </div>
            </div>
        );
    }
}

HomePage.defaultProps = {
    notes: null
};

export default HomePage;