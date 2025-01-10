import React from "react";
import Form from "next/form";

interface Props {
  createNewConversation: () => void;
  title: string;
}

const CanDoItem = ({ createNewConversation, title }: Props) => {
  return (
    <li className="inline">
      <Form className="inline" action={createNewConversation}>
        <input type="hidden" name="title" value={title} />
        <button
          type="submit"
          className="outline hover:bg-slate-100 outline-1 outline-slate-400 rounded-3xl p-2"
        >
          {title}
        </button>
      </Form>
    </li>
  );
};

export default CanDoItem;
