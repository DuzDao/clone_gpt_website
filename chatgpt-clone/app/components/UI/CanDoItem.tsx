import React from "react";
import Form from "next/form";

const CanDoItem = ({ createNewConversation, title }: any) => {
  return (
    <>
      <Form action={createNewConversation}>
        <input type="hidden" name="title" value={title} />
        <button type="submit">{title}</button>
      </Form>
    </>
  );
};

export default CanDoItem;
