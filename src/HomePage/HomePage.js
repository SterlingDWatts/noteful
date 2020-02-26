import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoteList from "../NoteList/NoteList";
import FolderNav from "../FolderNav/FolderNav";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="home_page">
        <FolderNav addFolder={true} />
        <div className="home_page__notes">
          <NoteList />
          <Link to={"/add_note"} className="add_note_button">
            Add Note
          </Link>
        </div>
      </div>
    );
  }
}

HomePage.defaultProps = {
  notes: null
};

export default HomePage;
