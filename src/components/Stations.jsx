import React from "react";

import busData from "../data/busData";

function Stations() {
  return (
    <div className="absolute top-[420px] -z-10 overflow-auto h-56 w-full">
      {busData.map((item) => (
        <div key={item.id} className="p-5">
          {item.stationName}
        </div>
      ))}
    </div>
  );
}

export default Stations;
