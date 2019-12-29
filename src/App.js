import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import AppContext from './AppContext';
import './App.css';

class App extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            notes: [],
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

    refreshNotes = () => {
        fetch('http://localhost:9090/notes', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(resJson => {
                this.setState({
                    notes: resJson
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleAddNote = (noteName, noteFolderId, noteContent) => {
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: noteName,
                folderId: noteFolderId,
                content: noteContent,
                modified: new Date()
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(data => {
                this.refreshNotes();
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDeleteNote = (noteId) => {
        fetch(`http://localhost:9090/notes/${noteId}/`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(data => {
                this.refreshNotes();
            })
            .catch(err => console.log(err))
        
    }

    refreshFolders = () => {
        fetch('http://localhost:9090/folders', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(resJson => {
                this.setState({
                    folders: resJson
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleAddFolder = (folder) => {
        fetch('http://localhost:9090/folders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: folder,
            }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(resJson => {
                this.refreshFolders();
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDeleteFolder = (folderId) => {
        fetch(`http://localhost:9090/folders/${folderId}/`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(resJson => {
                this.refreshFolders();
            })
            .catch(err => console.log(err))
    }

    render() {
        const contextValue = {
            folders: this.state.folders,
            notes: this.state.notes,
            addNote: this.handleAddNote,
            deleteNote: this.handleDeleteNote,
            addFolder: this.handleAddFolder,
            deleteFolder: this.handleDeleteFolder,
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
                        <Route
                            exact
                            path="/add_note"
                            component={AddNote}
                        />
                    </section>
                </main>
            </AppContext.Provider>
        );
    }
}

export default App;