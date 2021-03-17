import React from "react";
import { useSelector } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import parseData from "../helpers/parseData";
import { makeStyles } from "@material-ui/core/styles";

const _kDisplayName = "ChartWeather";

const useStyles = makeStyles(
  () => ({
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
  }),
  { name: _kDisplayName }
);

const Element = () => {
  const weatherInfo = useSelector((state) => state.weatherInfo.cityInfo);
  console.log(weatherInfo);
  const classes = useStyles();
  return (
    <React.Fragment>
      {Object.keys(weatherInfo).length > 0 && Number(weatherInfo.cod) === 200 && (
        <div className={classes.content}>
          <CurrentWeather data={weatherInfo} />
          <WeatherForecast data={parseData(weatherInfo)} />
        </div>
      )}

      {Number(weatherInfo.cod) === 404 && (
        <div className={classes.content}>Sorry, city not found</div>
      )}
    </React.Fragment>
  );
};

Element.displayName = _kDisplayName;
const ChartWeather = React.memo(Element);

export default ChartWeather;
