import React, { ChangeEvent } from "react";
import attachIcon from "@/public/attachIcon.svg";
import searchWebIcon from "@/public/searchWebIcon.svg";
import userInputSubmit from "@/public/userInputSubmit.svg";
import { addNewUserMessage } from "@/app/lib/actions";
import Image from "next/image";
import { useState } from "react";

const UserInput = () => {
  const [userTextInput, setUserTextInput] = useState("");
  const handleGetTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserTextInput(event.target.value);
  };

  const handleSubmitUserInput = async () => {
    if (userTextInput.trim() === "") return;
    addNewUserMessage(userTextInput);
  };

  return (
    <div className="user-input w-full max-w-2xl flex flex-col items-center gap-4 chatgpt-branch-bg-gray ps-4 pt-3 pe-1 rounded-xl justify-between">
      <input
        className="mx-2 w-full max-w-2xl chatgpt-branch-bg-gray focus:outline-none overflow-auto"
        type="text"
        placeholder="Message ChatGPT"
        value={userTextInput}
        onChange={handleGetTextInput}
      />

      <div className="input-buttons w-full flex flex-row justify-between items-center max-w-full">
        <div className="input-buttons-group flex gap-1">
          <button>
            <Image
              src={attachIcon}
              alt=""
              className="hover:bg-slate-300 rounded"
            />
          </button>
          <button>
            <Image
              src={searchWebIcon}
              alt=""
              className="hover:bg-slate-300 rounded"
            />
          </button>
        </div>
        <div>
          <button className="" onClick={handleSubmitUserInput}>
            <Image
              className="hover:bg-white rounded-full"
              src={userInputSubmit}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
