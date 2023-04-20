import React from "react";

import NavBar from "../components/NavBar";
import Map from "../components/Map";
import Stations from "../components/Stations";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Map />
      <Stations />
    </div>
  );
}

export default Home;
