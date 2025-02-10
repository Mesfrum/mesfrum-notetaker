import React from "react";
import NoteEditor from "./NoteEditor";
import styles from "../styles/App.module.css";
import "../styles/Reset.css";
import { X } from "lucide-react";

const App = () => {
  const closeSidebar = () => {
    chrome.runtime.sendMessage({ action: "toggleSidebar" });
  };

  return (
    <div className={`${styles?.sidebar_app}`}>
      <div className={`${styles?.sidebar_header}`}>
        <h2>Notes</h2>
        <button className={`${styles?.btn}`} onClick={closeSidebar}>
          <X  size={"12"}/>
        </button>
      </div>
      <NoteEditor />
    </div>
  );
};

export default App;
