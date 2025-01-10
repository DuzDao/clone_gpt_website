import { createNewConversation } from "@/app/lib/actions";
import CanDoItem from "../components/UI/CanDoItem";

export default function Conversation() {
  return (
    <>
      <div className="welcome-zone flex flex-col items-center">
        <h1 className=" text-3xl font-medium">What can I help with?</h1>
        <div className="can-do-list mt-5">
          <ul className="flex flex-wrap gap-2 w-full max-w-xl justify-center text-slate-500">
            <CanDoItem
              createNewConversation={createNewConversation}
              title="Train english skills"
            />
            <CanDoItem
              createNewConversation={createNewConversation}
              title="Train Math skills"
            />
            <CanDoItem
              createNewConversation={createNewConversation}
              title="Learn new thing"
            />
            <CanDoItem
              createNewConversation={createNewConversation}
              title="Create new Document With A Super Smart AI"
            />
            <CanDoItem
              createNewConversation={createNewConversation}
              title="I am a professional AI, I can do a lot of things. Whatever you need, I am willing to help you! This is so long conversation title."
            />
          </ul>
        </div>
      </div>
    </>
  );
}
