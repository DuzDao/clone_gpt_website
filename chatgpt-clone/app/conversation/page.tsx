import { createNewConversation } from "@/app/lib/actions";
import CanDoItem from "../components/UI/CanDoItem";

export default function Conversation() {
  return (
    <>
      <div className="welcome-zone">
        <h1>What can I help with?</h1>
        <div className="can-do-list">
          <ul>
            <li>
              <CanDoItem
                createNewConversation={createNewConversation}
                title="Train english skills"
              />
            </li>
            <li>
              <CanDoItem
                createNewConversation={createNewConversation}
                title="Train Math skills"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
