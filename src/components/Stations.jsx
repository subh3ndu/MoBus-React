import React from "react";

import busData from "../data/busData";

function Stations() {
  return (
    <div className="absolute top-[420px] -z-10">
      {busData.map((item) => (
        <div key={item.id}>{item.stationName}</div>
      ))}
    </div>
  );
}

export default Stations;
