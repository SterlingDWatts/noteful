import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteBox from './NoteBox';

describe(`NoteBox Component`, () => {

    const note = { 
        modified: '2019-01-03T00:00:00.000Z',
        name: 'test',
        id: '3448ki3dw'
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NoteBox note={ note } />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })
}) 