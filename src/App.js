import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import FolderPage from "./FolderPage/FolderPage";
import NotePage from "./NotePage/NotePage";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";
import AppContext from "./AppContext";
import config from "./config";
import "./App.css";

class App extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      error: null
    };
  }

  setFolders = folders => {
    this.setState({
      folders,
      error: null
    });
  };

  setNotes = notes => {
    this.setState({
      notes,
      error: null
    });
  };

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    });
  };

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  deleteFolder = folderId => {
    const newFolders = this.state.folders.filter(
      folder => folder.id !== folderId
    );
    this.setState({
      folders: newFolders
    });
  };

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes
    });
  };

  updateFolder = updateFolder => {
    const newFolders = this.state.folders.map(folder =>
      folder.id !== updateFolder.id ? folder : updateFolder
    );
    this.setState({
      folders: newFolders
    });
  };

  updateNote = updateNote => {
    const newNotes = this.state.notes.map(note =>
      note.id !== updateNote ? note : updateNote
    );
    this.setState({
      notes: newNotes
    });
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/folders`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${config.API_KEY}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/api/notes`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${config.API_KEY}`
        }
      })
    ])
      .then(([foldersRes, notesRes]) => {
        if (!foldersRes.ok) {
          throw new Error(foldersRes.status);
        }
        if (!notesRes.ok) {
          throw new Error(notesRes.status);
        }

        return Promise.all([foldersRes.json(), notesRes.json()]);
      })
      .then(([folders, notes]) => {
        this.setFolders(folders);
        this.setNotes(notes);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addFolder: this.addFolder,
      addNote: this.addNote,
      deleteFolder: this.deleteFolder,
      deleteNote: this.handleDeleteNote
    };

    return (
      <AppContext.Provider value={contextValue}>
        <main>
          <div className="noteful_header">
            <h1>
              <Link to="/">Noteful</Link>
            </h1>
          </div>
          <section className="noteful_app">
            <Route exact path="/" component={HomePage} />
            <Route path="/folder/:folderId" component={FolderPage} />
            <Route path="/note/:noteId" component={NotePage} />
            <Route exact path="/add_folder" component={AddFolder} />
            <Route exact path="/add_note" component={AddNote} />
          </section>
        </main>
      </AppContext.Provider>
    );
  }
}

export default App;
