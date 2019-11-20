import React, { Component } from 'react';
import NoteList from '../NoteList/NoteList';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home_page">

                <NoteList notes={this.props.notes} />
                <button>Add Note</button>
            </div>
        );
    }
}

HomePage.defaultProps = {
    notes: null
};

export default HomePage;