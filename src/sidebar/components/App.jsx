// src/sidebar/components/App.jsx
import React from "react";
import NoteEditor from "./NoteEditor";
import "../styles/App.css";
import "../styles/Reset.css"

const App = () => {
  return (
    <div className="sidebar-app">
      <h2>Notes</h2>
      <NoteEditor />
    </div>
  );
};

export default App;
