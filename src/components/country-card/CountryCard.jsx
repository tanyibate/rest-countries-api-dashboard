import React from "react";
import { useDispatch } from "react-redux";
import { setCountry } from "../../store/actions";
import { useHistory } from "react-router-dom";

export default function CountryCard({ country }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div
      className="w-72 overflow-hidden shadow-md rounded bg-white mb-12 sm:mb-18 mx-2 cursor-pointer"
      onClick={() => {
        dispatch(setCountry(country));
        history.push("/country");
      }}
    >
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
