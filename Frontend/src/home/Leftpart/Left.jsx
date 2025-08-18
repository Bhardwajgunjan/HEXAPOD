import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full  bg-[#0D7C66]">
      <h1 className="text-2xl mt-4 text-white font-semibold  rounded-md">
        Messages
      </h1>
      <Search />
      <div
        className=" flex-1"
        style={{ minHeight: "calc(80vh - 8vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
