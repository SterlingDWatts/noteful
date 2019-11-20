import React from 'react'
import ReactDOM from 'react-dom';
import NoteList from './NoteList';

describe(`NoteList Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NoteList notes={[]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})