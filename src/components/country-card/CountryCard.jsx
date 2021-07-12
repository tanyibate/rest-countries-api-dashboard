import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="w-72 overflow-hidden shadow-md rounded bg-white mb-12 sm:mb-18">
      <img src={country.flag} alt="" className="h-44 w-72 object-cover" />
      <div className="h-44 px-6  text-left">
        <p className="text-lg my-4 font-bold">{country.name}</p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold">Population: </span>
            {country.population}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
