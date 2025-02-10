// src/sidebar/components/App.jsx
import React from "react";
import NoteEditor from "./NoteEditor";
import styles from "../styles/App.module.css";
import "../styles/Reset.css";
import { toggleSidebar } from "../../background/background";

const App = () => {
  return (
    <div className={`${styles?.sidebar_app}`}>
      <div className={`${styles?.sidebar_header}`}>
        <h2>Notes</h2>
        <button className={`${styles?.btn}`} onClick={() => toggleSidebar()}>
          X
        </button>
      </div>
      <NoteEditor />
    </div>
  );
};

export default App;
