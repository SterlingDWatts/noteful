import React from 'react';

const AppContext = React.createContext({
    folders: [],
    notes: [],
    addNote: () => {},
    deleteNote: () => {},
    addFolder: () => {},
    deleteFolder: () => {},
})

export default AppContext