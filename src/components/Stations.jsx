import React from "react";

import busData from "../data/busData";

function Stations() {
  return (
    <div className="top-[420px] p-1 absolute overscroll-y-contain -z-10">
      {busData.map((item) => (
        <div key={item.id}>{item.stationName}</div>
      ))}
    </div>
  );
}

export default Stations;
