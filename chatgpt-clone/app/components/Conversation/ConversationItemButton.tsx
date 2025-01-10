import React from "react";
import conversationItemSettingIcon from "@/public/conversationItemSettingIcon.svg";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

interface Props {
  title: string;
  conversationId: string;
}

const ConversationItemButton = ({ title, conversationId }: Props) => {
  const [isSettingConversation, setIsSettingConversation] = useState(false);

  return (
    <button
      onClick={() => {
        redirect(`/conversation/${conversationId}`);
      }}
      onMouseEnter={() => {
        setIsSettingConversation(true);
      }}
      onMouseLeave={() => {
        setIsSettingConversation(false);
      }}
      className="relative flex flex-row justify-between items-center p-2 hover:bg-slate-200 w-full text-left text-sm rounded-xl hover:cursor-default"
    >
      <p className="whitespace-normal max-w-48 line-clamp-2 overflow-hidden">
        {title}
      </p>
      <Image
        src={conversationItemSettingIcon}
        alt=""
        onClick={(event) => {
          event.stopPropagation();
          console.log("Clicked!");
        }}
        className={
          !isSettingConversation
            ? "hidden"
            : "hover:bg-slate-300 rounded-md hover:cursor-pointer"
        }
      />
    </button>
  );
};

export default ConversationItemButton;
