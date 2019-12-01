import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Folder from './Folder';
import STORE from '../dummy-store';

describe(`Folder Component`, () => {

    const folder = STORE.folders[0]

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Folder folder={folder} key={folder.id} />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})