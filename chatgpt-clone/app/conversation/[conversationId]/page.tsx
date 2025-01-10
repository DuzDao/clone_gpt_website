"use client";
import { getMessages } from "@/app/lib/actions";
import { useEffect, useState } from "react";

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
    <>
      <ul>
        {messages.map((message) => (
          <li>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
