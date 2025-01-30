// src/utils/storage.js
export const saveNote = async (note) => {
  await chrome.storage.local.set({ note });
};

export const loadNote = async () => {
  const data = await chrome.storage.local.get("note");
  return data.note;
};
