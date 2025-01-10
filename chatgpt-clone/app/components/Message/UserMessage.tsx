import React from "react";

interface messageObject {
  id: string;
  content: string;
}

interface Props {
  message: messageObject;
}

const UserMessage = ({ message }: Props) => {
  return (
    <li key={message.id} className="self-end">
      <p className="py-2 px-3 max-w-80 chatgpt-branch-bg-gray text-right rounded-xl">
        {message.content}
      </p>
    </li>
  );
};

export default UserMessage;
