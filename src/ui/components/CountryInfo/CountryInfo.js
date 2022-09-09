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
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.country}>
        <div className={styles.content}>
          <p>
            <span className={styles.bold}>Capital: </span>
            {capital}
          </p>
          <p>
            <span className={styles.bold}>Area: </span>
            {numberWithCommas(area)} km²
          </p>
          <p>
            <span className={styles.bold}>Population: </span>
            {numberWithCommas(population)}
          </p>
          <p>
            <span className={styles.bold}>Languages: </span>
          </p>
          <ul>
            {Object.values(languages).map(lang => (
              <li className={styles.list} key={lang}>
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.flagAndWeather}>
          <img src={flag} alt={name} width="100" height="auto" />
          <WeatherInfo capital={capital} lat={lat} lon={lon} />
        </div>
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
