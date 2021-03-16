import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const _kDisplayName = "CurrentWeather";

const useStyles = makeStyles(
  () => ({
    weatherContent: {
      "& div": {
        margin: "10px 0",
      },
    },
  }),
  { name: _kDisplayName }
);
const Element = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { main } = data.list[0];
  const [weather] = data.list[0].weather;

  return (
    <div className={classes.weatherContent}>
      <img
        alt="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
      />
      <div>Now in {data.city.name}</div>
      <div>Description: {weather.description} </div>
      <div>Temperature: {main.temp}&deg;</div>
      <div>Feels like: {main.feels_like}&deg;</div>
      <div>Humidity: {main.humidity}%</div>
      <div>Pressure: {main.pressure}</div>
    </div>
  );
};

Element.displayName = _kDisplayName;
const WeatherList = React.memo(Element);

export default WeatherList;
