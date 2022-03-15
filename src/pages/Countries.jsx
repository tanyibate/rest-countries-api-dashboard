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
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      setDataLoading(false);
    });
  }
  async function getCountriesByRegion() {
    if (regionSearched) {
      axios
        .get(`https://restcountries.com/v2/region/${regionSearched}`)
        .then((res) => {
          setCountries(res.data);
          setDataLoading(false);
        });
    } else {
      getAllCountries();
    }
  }
  async function getCountriesByName() {
    if (countrySearched) {
      setDataLoading(true);
      axios
        .get(`https://restcountries.com/v2/name/${countrySearched}`)
        .then((res) => {
          setCountries(res.data);
          setDataLoading(false);
        });
    } else {
      getAllCountries();
    }
  }

  useEffect(() => {
    getAllCountries();
  }, []);
  useEffect(() => {
    getCountriesByName();
  }, [countrySearched]);
  useEffect(() => {
    getCountriesByRegion();
  }, [regionSearched]);
  return (
    <div className="w-full max-w-screen-lg 2xl:max-w-screen-xl xl h-full px-4 pt-6 sm:pt-18 overflow-scroll">
      <div className="flex items-start justify-between flex-wrap">
        <SearchBar setCountrySearched={setCountrySearched} />
        <Filter setRegionSearched={setRegionSearched} />
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap">
        {countries.map((country) => {
          return <CountryCard country={country} key={country.name} />;
        })}
      </div>
    </div>
  );
}
