import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchWeather } from "./redux/actions";

const _kDisplayName = "CitySearch";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    btn: {
      marginTop: 20,
    },
    input: {
      width: 300,
    },
  }),
  { name: _kDisplayName }
);

const Element = () => {
  const [city, setCity] = React.useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const getWeatherInfo = React.useCallback(
    (e) => {
      e.preventDefault();
      dispatch(fetchWeather(city));
    },
    [dispatch, city]
  );

  const setCityHandle = React.useCallback((e) => {
    setCity(e.target.value);
  }, []);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
          <TextField
            id="standard-basic"
            classes={{ root: classes.input }}
            label="Enter city name"
            onSubmit={getWeatherInfo}
            onChange={setCityHandle}
          />
        </div>
        <div>
          <Button
            classes={{ root: classes.btn }}
            variant="contained"
            onClick={getWeatherInfo}
          >
            Find
          </Button>
        </div>
      </div>
    </form>
  );
};

Element.displayName = _kDisplayName;
const CitySearch = React.memo(Element);

export default CitySearch;
