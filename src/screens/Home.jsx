import React from "react";

import NavBar from "../components/NavBar";
import Map from "../components/Map";
import Stations from "../components/Stations";

function Home() {
  return (
    <>
      <NavBar />
      <Map />
      <Stations />
    </>
  );
}

export default Home;
