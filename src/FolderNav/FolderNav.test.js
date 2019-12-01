import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FolderNav from './FolderNav';

describe(`FolderNav Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FolderNav />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})