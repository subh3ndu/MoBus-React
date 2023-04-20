import React from "react";
import busData from "../data/busData";

// icons
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Stations() {
  return (
    <div className="absolute top-[420px] -z-10 overflow-auto h-56 w-full">
      {busData.map((item) => (
        <div key={item.id} className="flex p-2 border-b-[1px] border-black">
          <div className="flex flex-col">
            <div className="flex items-center border border-red-400 rounded-md w-64">
              <div className="bg-red-400 text-white px-4">{item.id}</div>
              <div className="my-1 text-xs text-gray-600 pl-1">
                {item.stationName}
              </div>
            </div>

            <div className="flex items-center mt-1">
              <DirectionsBusIcon color="primary" />
              <div className="flex items-center gap-x-1 h-4 w-64 overflow-x-scroll scroll-hidden">
                <div className="bg-[#1581C4] text-white flex rounded-md px-1 gap-x-1 items-center">
                  {item.arriving.map((num, ind) => (
                    <span className="text-xs flex gap-x-1">
                      <span className="">{num}</span>
                      <span>{ind + 1 === item.arriving.length ? "" : "|"}</span>
                    </span>
                  ))}
                </div>
                <div className="bg-slate-500 text-white flex rounded-md px-1 gap-x-1 items-center">
                  {item.arriving.map((num, ind) => (
                    <span className="text-xs flex gap-x-1">
                      <span className="">{num}</span>
                      <span>{ind + 1 === item.arriving.length ? "" : "|"}</span>
                    </span>
                  ))}
                </div>
              </div>
              {/* <div className="bg-slate-400 h-4 px-1 flex items-center gap-x-1 text-white rounded-md">
                {item.toBeScheduled.map((num, ind) => (
                  <span className="">
                    {num} {ind + 1 === item.arriving.length ? "" : "|"}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default Stations;
