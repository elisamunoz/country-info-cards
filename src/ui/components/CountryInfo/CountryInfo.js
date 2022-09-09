import WeatherInfo from "../WeatherInfo";
import styles from "./CountryInfo.module.scss";

const CountryInfo = ({
  name,
  capital,
  area,
  languages = {},
  flag,
  population,
  lat,
  lon
}) => {
  const numberWithCommas = number =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className={styles.countryInfo}>
      <div className={styles.country}>
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {numberWithCommas(area)} km²</p>
        <p>Population: {numberWithCommas(population)}</p>
        <p>Languages:</p>
        <ul>
          {Object.values(languages).map(lang => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
      <div className={styles.flagAndWeather}>
        <img src={flag} alt={name} width="100" height="auto" />
        <WeatherInfo capital={capital} lat={lat} lon={lon} />
      </div>
    </div>
  );
};

const CountryList = ({ name, onClick }) => {
  return (
    <div>
      <li className={styles.link} onClick={onClick}>
        {name}
      </li>
    </div>
  );
};

export { CountryInfo, CountryList };
