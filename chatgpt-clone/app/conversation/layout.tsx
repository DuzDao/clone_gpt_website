import HistoryConversationModal from "../components/Conversation/HistoryConversationModal";

export default function ConversationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="conversation-header">
        <button>O/C</button>
        <HistoryConversationModal />
        <button>Select models</button>
        <button>New chat</button>
      </div>
      <div className="conversation-body">{children}</div>
      <div className="conversation-footer">
        <div className="user-input">
          <input type="text" placeholder="Message ChatGPT" />
          <button>Submit</button>
        </div>
        <div className="user-warning">
          ChatGPT can make mistake. Check important info.
        </div>
      </div>
    </div>
  );
}
