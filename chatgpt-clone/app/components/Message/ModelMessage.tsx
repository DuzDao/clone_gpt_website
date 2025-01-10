import React from "react";

interface messageObject {
  id: string;
  content: string;
}

interface Props {
  message: messageObject;
}

const ModelMessage = ({ message }: Props) => {
  return (
    <li key={message.id} className="self-start">
      <p className="py-2 px-3 max-w-80 text-left rounded-xl">
        {message.content}
      </p>
      <div></div>
    </li>
  );
};

export default ModelMessage;
