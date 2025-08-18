import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-1 h-[8vh]  bg-[#0D7C66]">
        <div className=" w-[70%]">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-black bg-gray-300 outline-none mt-1 px-4 py-2 w-full"
          />
        </div>
        <button>
          <IoSend className="ml-4 text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
