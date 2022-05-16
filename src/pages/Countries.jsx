import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import Filter from "../components/filter/Filter";
import CountryCard from "../components/country-card/CountryCard";
import axios from "axios";

export default function Countries() {
  const [countrySearched, setCountrySearched] = useState("");
  const [regionSearched, setRegionSearched] = useState("");
  const [countries, setCountries] = useState([]);

  const getAllCountries = useCallback(async () => {
    await axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  const getCountriesByRegion = useCallback(async () => {
    if (regionSearched) {
      await axios
        .get(`https://restcountries.com/v2/region/${regionSearched}`)
        .then((res) => {
          setCountries(res.data);
        });
    } else {
      await getAllCountries();
    }
  }, [getAllCountries, regionSearched]);
  const getCountriesByName = useCallback(async () => {
    if (countrySearched) {
      await axios
        .get(`https://restcountries.com/v2/name/${countrySearched}`)
        .then((res) => {
          setCountries(res.data);
        });
    } else {
      await getAllCountries();
    }
  }, [getAllCountries, countrySearched]);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);
  useEffect(() => {
    getCountriesByName();
  }, [countrySearched, getCountriesByName]);
  useEffect(() => {
    getCountriesByRegion();
  }, [regionSearched, getCountriesByRegion]);
  return (
    <div className="flex flex-col w-full max-w-screen-lg 2xl:max-w-screen-xl xl h-full px-4 pt-6 sm:pt-18 overflow-scroll">
      <div className="flex items-start justify-between flex-wrap">
        <SearchBar setCountrySearched={setCountrySearched} />
        <Filter setRegionSearched={setRegionSearched} />
      </div>
      <div className="flex flex-1 justify-center sm:justify-between flex-wrap overflow-scroll">
        {countries.map((country) => {
          return <CountryCard country={country} key={country.name} />;
        })}
      </div>
    </div>
  );
}
