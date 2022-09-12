import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./WeatherInfo.module.scss";
// import { WEATHER_SANTIAGO } from "../../_mock";

const API_KEY = process.env.REACT_APP_API_KEY;

const WeatherInfo = ({ capital, lat, lon }) => {
  const [weatherResult, setWeatherResult] = useState([]);

  const weatherHook = () => {
    if (lat && lon) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        .then(response => {
          setWeatherResult([response.data]);
        });
    }
  };
  useEffect(weatherHook, [lat, lon]);

  const temperature = weatherResult.map(temp => temp.main);
  const weather = weatherResult.map(weather => weather.weather);

  return (
    <div>
      <h4 className={styles.mainText}>Weather in {capital}</h4>
      {temperature.map(temp => (
        <div key={temp.temp}>
          <p className={styles.temperature}>{temp.temp}°C</p>
          <p>Feels like: {temp.feels_like} °C</p>
        </div>
      ))}
      {weather.map(weatherInfo => {
        const { id, main, description, icon } = weatherInfo[0];

        return (
          <div key={id}>
            <p className={styles.info}>
              {main}, {description}
            </p>
            <img
              alt={description}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
          </div>
        );
      })}
    </div>
  );
};
export default WeatherInfo;
