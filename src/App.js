import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './dummy-store';
import HomePage from './HomePage/HomePage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store: STORE,
            selectedFolder: null,
            selectedNote: null
        }
    }

    render() {
        return (
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
                        render={() =>
                            <HomePage 
                                notes={this.state.store.notes} 
                                folders={this.state.store.folders}
                            />
                        }
                    />
                    <Route
                        path="/folder/:folderId"
                        component={FolderPage}
                    />
                    <Route
                        path="/note/:noteId"
                        render={({ history }) => {
                            return <NotePage onClickBack={() => history.goBack()} />
                        }}
                    />
                </section>
            </main>
        );
    }
}

export default App;