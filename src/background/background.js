// src/background/background.js
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleSidebar,
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleSidebar" && sender.tab?.id) {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: toggleSidebar,
    });
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("react-sidebar");
  if (sidebar) {
    sidebar.remove();
    document.body.style.marginRight = "";
  } else {
    const iframe = document.createElement("iframe");
    iframe.id = "react-sidebar";
    iframe.src = chrome.runtime.getURL("sidebar.html");
    iframe.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 320px;
        height: 100%;
        border: 1px black solid;
        z-index: 99999;
        background-color: white;
      `;
    document.body.appendChild(iframe);
  }
}
