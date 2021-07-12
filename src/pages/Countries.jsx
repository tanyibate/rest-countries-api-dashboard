import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import Filter from "../components/filter/Filter";
import CountryCard from "../components/country-card/CountryCard";
import axios from "axios";

export default function Countries() {
  const [countrySearched, setCountrySearched] = useState("");
  const [regionSearched, setRegionSearched] = useState("");
  const [countries, setCountries] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  async function getAllCountries() {
    setDataLoading(true);
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
      setDataLoading(false);
    });
  }

  async function getCountriesByName() {
    if (countrySearched) {
      setDataLoading(true);
      axios
        .get(`https://restcountries.eu/rest/v2/name/${countrySearched}`)
        .then((res) => {
          setCountries(res.data);
          setDataLoading(false);
        });
    }
  }

  useEffect(() => {
    getAllCountries();
  }, []);
  useEffect(() => {
    getCountriesByName();
  }, [countrySearched]);
  return (
    <div className="w-full h-full px-4 md:px-12 lg:px-16 pt-6 sm:pt-18 overflow-scroll">
      <div className="flex items-start justify-between flex-wrap">
        <SearchBar setCountrySearched={setCountrySearched} />
        <Filter />
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap">
        {countries.map((country) => {
          return <CountryCard country={country} key={country.name} />;
        })}
      </div>
    </div>
  );
}
