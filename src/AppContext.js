import React from "react";

const AppContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  addNote: () => {},
  deleteFolder: () => {},
  deleteNote: () => {}
});

export default AppContext;
