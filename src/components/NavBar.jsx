import React from "react";
import { IconButton } from "@mui/material";

// Icons
import TurnRightIcon from "@mui/icons-material/TurnRight";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  return (
    <div className="bg-[#1581C4] flex items-center w-full h-16">
      {/* Menu Icon */}
      <IconButton size="small">
        <MenuIcon className="text-white" />
      </IconButton>

      {/* Search Bar */}
      <div className="w-full mr-5 flex flex-col justify-center relative">
        {/* Mobus logo */}
        <div className="w-10 bg-white rounded-full p-1 absolute">
          <img src="./assets/icon.png" alt="" />
        </div>
        {/* Input bar */}
        <input
          type="text"
          placeholder="From where to board Mo Bus ?"
          className="h-8 w-full rounded-md mx-4 bg-slate-200 bg-opacity-80 text-xs pl-7 outline-none"
        />
        {/* Search icon */}
        <i className="absolute top-1 -right-4">
          <SearchIcon className="text-white" />
        </i>
      </div>

      {/* Enter icon */}
      <div className="border rounded-md flex items-center mr-1">
        <IconButton size="small">
          <TurnRightIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
}

export default Home;
