import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePage from './NotePage';

describe(`NotePage Component`, () => {

    const match = { params: { noteId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1' } }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NotePage match={ match } />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})