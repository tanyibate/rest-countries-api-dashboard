import React, { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import Filter from "../components/filter/Filter";
import CountryCard from "../components/country-card/CountryCard";

export default function Countries() {
  const [countrySearched, setCountrySearched] = useState("");
  return (
    <div className="w-full h-full px-4 md:px-12 lg:px-16 pt-6 sm:pt-18">
      <div className="flex items-start justify-between flex-wrap">
        <SearchBar />
        <Filter />
      </div>
      <div className="flex justify-center">
        <CountryCard></CountryCard>
      </div>
    </div>
  );
}
