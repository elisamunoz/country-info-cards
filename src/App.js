import { useState, useEffect } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import axios from "axios";
import PageLayout from "./ui/layout";
import { MenuSelector, Option } from "./ui/components/MenuSelector";
import { CountryInfo, CountryList } from "./ui/components/CountryInfo";
import WindowContainer from "./ui/components/WindowContainer";
import explorer from "./assets/images/icons/explorer.png";
import closingButton from "./assets/images/icons/x.png";
import styles from "./App.module.scss";
import "./assets/styles/reset.scss";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showMainMenu, setShowMainMenu] = useState(false);

  const countriesHook = () => {
    // setCountries(DATA_CHILE);
    setIsLoading(false);
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    countriesHook();
  }, []);

  const handleInputQuery = event => {
    setQuery(event.target.value);
  };

  const resetQuery = () => {
    setQuery("");
    setSelectedCountry(null);
  };

  const handleContinent = value => {
    setContinent(value);
  };

  const getCountryName = country => country.name.common;
  const filterCountry = countries.filter(country =>
    getCountryName(country)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const MAX_COUNTRIES_ITEMS = 10;
  const countryLength = filterCountry.length;

  const handleSeeCountryClick = country => {
    setSelectedCountry(country);
    setShowMainMenu(false);
    setContinent(null);
  };

  const handleStartButton = () => {
    if (!showMainMenu) {
      setContinent(null);
    }

    setShowMainMenu(!showMainMenu);
  };

  const getContinents = countries => {
    const continents = countries.map(country => country.continents[0]);
    return [...new Set(continents.sort())];
  };

  const getCountryByContinent = continent =>
    countries.filter(
      countryByContinent => countryByContinent.continents[0] === continent
    );

  return (
    <PageLayout
      onClickRecycleBin={resetQuery}
      footerButtonText={selectedCountry?.name.common}
      showFooterButton={selectedCountry}
      startButtonOnClick={() => handleStartButton()}
      footerButtonActive
      isActiveStart={showMainMenu}
    >
      <WindowContainer
        className={styles.menuOptions}
        title="Find a Country"
        icon={explorer}
      >
        <form className={styles.form}>
          Find countries:
          <input
            placeholder="Type a country name"
            className={styles.query}
            value={query}
            onChange={handleInputQuery}
            disabled={isLoading}
          />
        </form>

        {isLoading && <span>Loading...</span>}

        {!countryLength && (
          <p>There are no coincidences, please search again</p>
        )}

        {countryLength > MAX_COUNTRIES_ITEMS && (
          <p>Too many matches, specify another filter</p>
        )}

        {countryLength <= MAX_COUNTRIES_ITEMS && (
          <ul>
            {filterCountry.map(country => (
              <CountryList
                onClick={() => handleSeeCountryClick(country)}
                key={country.cca3}
                name={getCountryName(country)}
              />
            ))}
          </ul>
        )}
      </WindowContainer>

      {selectedCountry && (
        <div className={styles.windowCountryCard}>
          {
            <WindowContainer
              key={getCountryName(selectedCountry)}
              title={getCountryName(selectedCountry)}
              icon={explorer}
              actionIcon={closingButton}
              onClick={resetQuery}
              className={styles.countryWindow}
            >
              <CountryInfo
                name={getCountryName(selectedCountry)}
                key={selectedCountry.cca3}
                capital={selectedCountry.capital}
                area={selectedCountry.area}
                population={selectedCountry.population}
                languages={selectedCountry.languages}
                flag={selectedCountry.flags.svg}
                lat={selectedCountry.latlng[0]}
                lon={selectedCountry.latlng[1]}
              />
            </WindowContainer>
          }
        </div>
      )}
      <OutsideClickHandler
        onOutsideClick={() => {
          showMainMenu && setShowMainMenu(false)
      }}>
        <MenuSelector
          // onChange={handleContinent}
          isVisible={showMainMenu}
        >
          {getContinents(countries).map(continent => (
            <Option key={continent} value={continent} onClick={handleContinent} />
          ))}
        </MenuSelector>

        <MenuSelector
          isVisible={showMainMenu}
          className={styles.menuCountrySelector}
        >
          {getCountryByContinent(continent).map(country => (
            <Option
              onClick={() => handleSeeCountryClick(country)}
              key={getCountryName(country)}
              value={getCountryName(country)}
              hasMoreOptions={false}
              classNameOption={styles.optionsCountry}
              classNameTextOption={styles.textCountryOption}
            />
          ))}
        </MenuSelector>
      </OutsideClickHandler>
    </PageLayout>
  );
};

export default App;
