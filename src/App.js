import React from "react";
import ChartWeather from "./components/ChartWeather";
import CitySearch from "./components/CitySearch";

const App = () => (
  <React.Fragment>
    <CitySearch />
    <ChartWeather />
  </React.Fragment>
);
export default App;
