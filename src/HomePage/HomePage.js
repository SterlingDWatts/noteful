import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import FolderNav from '../FolderNav/FolderNav';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home_page">
                <FolderNav folders={this.props.folders}/>
                <div className="home_page__notes">
                    <NoteList notes={this.props.notes} />
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