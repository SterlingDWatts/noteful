import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FolderPage from './FolderPage';

describe(`FolderPage Component`, () => {

    const match = { params: { folderId: 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1' } }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FolderPage match={ match } />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})