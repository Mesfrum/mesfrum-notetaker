import React, { useState, useEffect } from "react";
import { saveNote, loadNote } from "../../utils/storage";

const NoteEditor = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    loadNote().then((savedNote) => {
      if (savedNote) {
        setNote(savedNote);
      }
    });
  }, []);

  const handleChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    saveNote(newNote);
  };

  return (
    <textarea
      className="note-editor"
      value={note}
      onChange={handleChange}
      placeholder="Take your notes here..."
    />
  );
};

export default NoteEditor;
