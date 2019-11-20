import React, { Component } from 'react';
import STORE from './dummy-store';
import HomePage from './HomePage/HomePage';
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
                    <h1>Noteful</h1>
                </div>
                <section className="noteful_app">
                    <HomePage 
                        notes={this.state.store.notes} 
                        folders={this.state.store.folders}/>
                </section>
            </main>
        );
    }
}

export default App;