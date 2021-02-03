import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loot from "./Pages/LootCalcula";
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/PartyHuntAnaLyzer' exact component={Loot} />
    </Switch>
  );
};
export default Routes;
