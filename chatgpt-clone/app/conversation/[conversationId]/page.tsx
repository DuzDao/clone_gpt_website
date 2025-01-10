"use client";
import { getMessages } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import UserMessage from "@/app/components/Message/UserMessage";
import ModelMessage from "@/app/components/Message/ModelMessage";

export default function Conversation({
  params,
}: {
  params: { conversationId: string };
}) {
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMessages(params.conversationId);
      setMessages(data.res);
    };
    fetchData();
  }, []);

  return (
    <div className="main-chat-zone w-full h-full">
      <ul className="mx-4 flex flex-col gap-5">
        {messages.map((message) =>
          message.sender === "model" ? (
            <ModelMessage message={message} />
          ) : (
            <UserMessage message={message} />
          )
        )}
      </ul>
    </div>
  );
}
