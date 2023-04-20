import React from "react";

import busData from "../data/busData";

export default function Map() {
  return (
    <>
      <div className="flex flex-col fixed top-16">
        <img src="./assets/map.jpg" alt="map" />
        <div className="bg-[#1581C4] text-white py-2 text-sm text-center">
          STOPS NEAR YOUR LOCATION
        </div>
      </div>
      <div className="absolute top-[420px]">
        {busData.map((item) => (
          <div key={item.id}>{item.stationName}</div>
        ))}
      </div>
    </>
  );
}
