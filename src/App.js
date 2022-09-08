import { useState, useEffect } from "react";
import axios from "axios";
// import { DATA_CHILE } from "./_mock";
import PageLayout from "./ui/layout";
import { MenuSelector, Option } from "./ui/components/MenuSelector";
import { CountryInfo, CountryList } from "./ui/components/CountryInfo";
import { playWindowsStartSound } from "./functions/helpers";
import WindowContainer from "./ui/components/WindowContainer";
import myPC from "./assets/images/icons/myPC.png";
import closingButton from "./assets/images/icons/x.png";
import "./assets/styles/reset.scss";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    playWindowsStartSound();
  }, []);

  const handleInputQuery = event => {
    setQuery(event.target.value);
  };

  const handleQuery = value => {
    setQuery(value);
  };

  const resetQuery = () => setQuery("");

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
    setQuery(getCountryName(country));
  };

  const getContinents = countries => {
    const continents = countries.map(country => country.continents[0]);
    return [...new Set(continents)];
  };

  const getCountryByContinent = continent =>
    countries.filter(
      countryByContinent => countryByContinent.continents[0] === continent
    );

  // const filterCountryByContinent = continents =>
  //   continents.map(continent => getCountryByContinent(continent));

  // console.log(getCountryByContinent(continent));

  return (
    <PageLayout>
      <MenuSelector
        // onChange={handleContinent}
        name="continents"
        label="Choose a continent:"
      >
        {getContinents(countries).map(continent => (
          <Option key={continent} value={continent} onClick={handleContinent} />
        ))}
      </MenuSelector>

      <MenuSelector name="countries" label="Choose a country:">
        {getCountryByContinent(continent).map(country => (
          <Option
            onClick={handleQuery}
            key={getCountryName(country)}
            value={getCountryName(country)}
            hasMoreOptions={false}
          />
        ))}
      </MenuSelector>

      <form>
        find countries
        <input value={query} onChange={handleInputQuery} disabled={isLoading} />
      </form>

      {isLoading && <span>Loading...</span>}

      {!countryLength && <p>There are no coincidences, please search again</p>}

      {countryLength > MAX_COUNTRIES_ITEMS && (
        <p>Too many matches, specify another filter</p>
      )}

      {countryLength > 1 && countryLength <= MAX_COUNTRIES_ITEMS && (
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

      {countryLength === 1 && (
        <div>
          {filterCountry.map(country => (
            <WindowContainer
              key={getCountryName(country)}
              title={getCountryName(country)}
              icon={myPC}
              actionIcon={closingButton}
              onClick={resetQuery}
            >
              <CountryInfo
                name={getCountryName(country)}
                key={country.cca3}
                capital={country.capital}
                area={country.area}
                population={country.population}
                languages={country.languages}
                flag={country.flags.svg}
                lat={country.latlng[0]}
                lon={country.latlng[1]}
              />
            </WindowContainer>
          ))}
        </div>
      )}
    </PageLayout>
  );
};

export default App;
