import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import './NoteBox.css';

class NoteBox extends Component {

    static contextType = AppContext;

    render() {
        const dateTime = new Date(this.props.note.modified);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateString = new Intl.DateTimeFormat('en-US', options).format(dateTime);
        const modifiedOn = 'Date modified on ' + dateString;
        return (
            <li className='note_box'>
                <Link to={`/note/${this.props.note.id}`} className='link_to_note'>
                    <h2 className='note_name'>{this.props.note.name}</h2>
                </Link>
                <div>
                    <span>{ modifiedOn }</span>
                    <button 
                        className="delete_note__button"
                        onClick={() => this.context.deleteNote(this.props.note.id)}
                    >
                        Delete Note
                    </button>
                </div>                
            </li>
        );
    }

}

export default NoteBox;