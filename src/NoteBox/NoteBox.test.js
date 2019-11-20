import React from 'react';
import ReactDOM from 'react-dom';
import NoteBox from './NoteBox';

describe(`NoteBox Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NoteBox />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})