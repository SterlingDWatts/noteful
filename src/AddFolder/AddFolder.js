import React, { Component } from 'react';
import FolderNav from '../FolderNav/FolderNav';
import AppContext from '../AppContext';
import ValidationError from '../ValidationError/ValidationError';
import './AddFolder.css';

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false,
            },
        }
    }

    static contextType = AppContext;

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 4 || name.length > 40) {
            return 'Name must be 4-40 characters.';
        }

        if (this.context.folders.map(folder => folder.name).includes(name)) {
            return 'Name must be unique';
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name.value;
        this.context.addFolder(name);
        this.props.history.push('/');
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='add_folder_page'>
                <FolderNav />
                <form className='add_folder_form' onSubmit={e => this.handleSubmit(e)}>
                    <h2>Add Folder</h2>
                    <label htmlFor='folder_name' className='folder_name_label'>Folder Name:{' '}</label>
                    <input 
                        type='text' 
                        className='folder_name_input' 
                        name='folder_name' 
                        id='folder_name' 
                        onChange={e => this.updateName(e.target.value)}
                    />
                    {this.state.name.touched &&(
                        <ValidationError message={this.validateName()} />
                    )}
                    <div className='add_folder_button_group'>
                        <button 
                            type='reset'
                            onClick={this.handleGoBack}
                        >
                            Cancel
                        </button>
                        <button 
                            type='submit'
                            disabled={ this.validateName() }
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

        );
    }

}

export default AddFolder;
