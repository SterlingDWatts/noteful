import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import AddFolder from './AddFolder/AddFolder';
import AppContext from './AppContext';
import './App.css';

class App extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            notes: [],
            selectedFolder: null,
            selectedNote: null
        }
    }

    componentDidMount() {

        fetch('http://localhost:9090/folders', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(resJson => {
                this.setState({
                    folders: resJson,
                })
            })
            .catch(err => console.log(err))

        fetch('http://localhost:9090/notes', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(resJson => {
                this.setState({
                    notes: resJson,
                })
            })
            .catch(err => console.log(err))

    }

    handleDeleteNote = (noteId) => {
        const newNotes = this.state.notes.filter(note => note.id !== noteId)
        this.setState({
            notes: newNotes
        })
    }

    render() {
        const contextValue = {
            folders: this.state.folders,
            notes: this.state.notes,
            deleteNote: this.handleDeleteNote,
        }
        return (
            <AppContext.Provider value={contextValue}>
                <main>
                    <div className="noteful_header">
                        <h1>
                            <Link to="/">Noteful</Link>
                        </h1>
                    </div>
                    <section className="noteful_app">
                        <Route 
                            exact
                            path="/"
                            component={HomePage}
                        />
                        <Route
                            path="/folder/:folderId"
                            component={FolderPage}
                        />
                        <Route
                            path="/note/:noteId"
                            component={NotePage}
                        />
                        <Route
                            exact
                            path="/add_folder"
                            component={AddFolder}
                        />
                    </section>
                </main>
            </AppContext.Provider>
        );
    }
}

export default App;