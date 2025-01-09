import React from "react";
import conversationItemSettingIcon from "@/public/conversationItemSettingIcon.svg";
import Image from "next/image";

interface Props {
  title: string;
}

const ConversationItemButton = ({ title }: Props) => {
  return (
    <button className="flex flex-row justify-between p-2 hover:bg-slate-200 w-full text-left text-sm rounded-xl">
      <p>{title}</p>
      <Image src={conversationItemSettingIcon} alt="" className="" />
    </button>
  );
};

export default ConversationItemButton;
