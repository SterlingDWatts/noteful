import React, { Component } from 'react';
import STORE from './dummy-store';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            folders: STORE.folders,
            notes: STORE.notes
        }
    }

    render() {
        return (
            <main>
                <header>
                    <h1>Noteful</h1>
                </header>
                <section className="noteful_app">
                    
                </section>
            </main>
        );
    }
}

export default App;