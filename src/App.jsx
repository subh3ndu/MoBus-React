import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./screens/Landing";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          {/* <Landing /> */}
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
