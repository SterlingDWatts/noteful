import React, { Component } from 'react';
import FolderNav from '../FolderNav/FolderNav';
import AppContext from '../AppContext';
import ValidationError from '../ValidationError/ValidationError';
import './AddNote.css';

class AddNote extends Component {

    state = {
        name: {
            value: '',
            touched: false,
        },
        folder: {
            value: '',
            touched: false,
        },
        content: {
            value: '',
            touched: false,
        },
    };

    static contextType = AppContext;

    updateName = (event) => {
        this.setState({
            name: {
                value: event.target.value,
                touched: true,
            }
        })
    }

    validateName = () => {
        if (!this.state.name.value) {
            return 'Name is required.'
        } else if (this.state.name.value.length < 4 || this.state.name.value.length > 10) {
            return 'Name must be between 4 - 10 characters.'
        }

        if (this.context.notes.map(note => note.name).includes(this.state.name.value)) {
            return 'Name must be unique'
        }
    }

    updateFolder = (event) => {
        this.setState({
            folder: {
                value: event.target.value,
                touched: true,
            } 
        })
    }

    validateFolder = () => {
        if (!this.state.folder.value) {
            return 'Folder is required.'
        }
    }

    updateContent = (event) => {
        this.setState({
            content: {
                value: event.target.value,
                touched: true,
            }
        })
    }

    validateContent = () => {
        if (!this.state.content.value) {
            return 'Content is required.'
        }
        if (this.state.content.value.length < 4 || this.state.content.value.length > 240) {
            return 'Content must be between 4 - 240 characters.'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name.value;
        const folder = this.state.folder.value;
        const content = this.state.content.value;
        this.context.addNote(name, folder, content);
        this.props.history.push('/');
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        const folderNames = this.context.folders.map(folder => {
            return (
                <option 
                    key={folder.id} 
                    value={folder.id}
                >
                    {folder.name}
                </option>
            )
        })
        return (
            <div className='add_note_page'>
                <FolderNav selectedFolder={null} />
                <form className='add_note_form' onSubmit={e => this.handleSubmit(e)}>
                    <h2>Add Note</h2>
                    <div className='form_group'>
                        <label htmlFor='note_name' className='note_name_label'>Note Name:{' '}</label>
                        <input 
                            type='text' 
                            name='note_name' 
                            id='note_name'
                            value={this.state.name.value}
                            onChange={e => this.updateName(e)}
                        />
                        {this.state.name.touched && (
                            <ValidationError message={this.validateName()} />
                        )}
                    </div>
                    <div className='form_group'>
                        <label htmlFor='folder_name' className='folder_name_label'>
                            Folder:{' '}
                        </label>
                        <select 
                            name='folder_name' 
                            id='folder_name' 
                            required 
                            value={this.state.folder.value}
                            onChange={e => this.updateFolder(e)}
                        >
                            <option value=''>
                                Select a folder
                            </option>
                            { folderNames }
                        </select>
                        {this.state.folder.touched && (
                            <ValidationError message={this.validateFolder()} />
                        )}
                    </div>
                    <div className='form_group'>
                        <label htmlFor='note_content' className='note_content_label'>Note Content:{' '}</label>
                        <textarea 
                            name='note_content' 
                            id='note_content' 
                            value={this.state.content.value}
                            onChange={e => this.updateContent(e)}
                        />
                        {this.state.content.touched && (
                            <ValidationError message={this.validateContent()} />
                        )}
                    </div>
                    <div className='add_note_form_buttons'>
                        <button 
                            type='reset'
                            onClick={this.handleGoBack}
                        >
                            Cancel
                        </button>
                        <button 
                            type='submit'
                            disabled={ this.validateName() || this.validateFolder() || this.validateContent() }
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddNote;
