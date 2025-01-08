import React from "react";

const HistoryConversationModal = () => {
  return (
    <div className="history-conversation-modal hidden">
      <div className="modal-header">
        <button>Close</button>
        <button>Search</button>
        <button>New Chat</button>
      </div>
      <div className="modal-body">
        <button>ChatGPT</button>
        <button>Explore GPTs</button>
      </div>
      <div className="modal-footer">
        <button>Upgrade Plan</button>
        <button>Dung Dao</button>
      </div>
    </div>
  );
};

export default HistoryConversationModal;
