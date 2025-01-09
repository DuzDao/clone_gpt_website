import React from "react";

interface Props {
  title: string;
}

const ConversationItemButton = ({ title }: Props) => {
  return (
    <button className="p-2 hover:bg-slate-200 w-full text-left text-sm rounded-xl">
      {title}
    </button>
  );
};

export default ConversationItemButton;
