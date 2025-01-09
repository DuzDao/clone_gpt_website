import React from "react";
import sidebarToogle from "@/public/sidebarToogle.svg";
import sidebarSearch from "@/public/sidebarSearch.svg";
import sidebarNewchat from "@/public/sidebarNewchat.svg";
import chatgptIcon from "@/public/chatgpt.svg";
import sidebarExplore from "@/public/sidebarExplore.svg";
import sidebarUpgrade from "@/public/sidebarUpgrade.svg";
import userIcon from "@/public/userIcon.svg";
import Image from "next/image";

interface Props {
  isSidebarOpen: boolean;
  toogleSidebar: () => void;
}

const HistoryConversationModal = ({ isSidebarOpen, toogleSidebar }: Props) => {
  if (!isSidebarOpen) {
    return <></>;
  }

  return (
    <div className="history-conversation-modal fixed top-0 left-0 p-2 pt-4 bg-zinc-50 outline outline-1 outline-slate-300 max-w-xl min-w-72 h-screen flex flex-col">
      {/* Modal Header */}
      <div className="modal-header flex flex-row justify-between ">
        <button
          onClick={toogleSidebar}
          className="px-2 py-1.5 rounded hover:bg-slate-200"
        >
          <Image src={sidebarToogle} alt="" />
        </button>
        <div className="flex">
          <button className="px-2 py-1.5 rounded hover:bg-slate-200">
            <Image src={sidebarSearch} alt="" />
          </button>
          <button className="px-2 py-1.5 rounded hover:bg-slate-200">
            <Image src={sidebarNewchat} alt="" />
          </button>
        </div>
      </div>
      {/* Modal Body */}
      <div className="modal-body mt-5 flex flex-col items-start flex-grow">
        <button className="flex w-full gap-3 hover:bg-slate-200 rounded-xl px-3 py-2">
          <div className="outline outline-1 rounded-full p-0.5 outline-slate-300 bg-white">
            <Image src={chatgptIcon} alt="" className="h-5 w-5"></Image>
          </div>
          <p>ChatGPT</p>
        </button>
        <button className="flex w-full gap-3 hover:bg-slate-200 rounded-xl px-3 py-2">
          <div className="rounded-full p-0.5">
            <Image src={sidebarExplore} alt="" className="h-5 w-5" />
          </div>
          <p>Explore GPTs</p>
        </button>

        {/* Danh sách button các conversation */}
      </div>
      {/* Modal Footer */}
      <div className="modal-footer">
        <button className="flex flex-row items-center gap-2 hover:bg-slate-200 w-full px-3 py-2 rounded-xl">
          <div className="outline outline-1 rounded-full p-1 outline-slate-300">
            <Image src={sidebarUpgrade} alt="" className="p-0.5" />
          </div>
          <div className="flex flex-col items-start">
            <h1>Upgrade plan</h1>
            <p className="text-xs text-slate-400">
              More access to the best models
            </p>
          </div>
        </button>
        <button className="flex flex-row items-center hover:bg-slate-200 w-full px-3 py-2 rounded-xl">
          <Image src={userIcon} alt="" className="w-10 h-10 pb-1" />
          <p>DuzDao</p>
        </button>
      </div>
    </div>
  );
};

export default HistoryConversationModal;
