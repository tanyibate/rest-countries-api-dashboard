import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Country() {
  const country = useSelector((state) => state.country);
  const history = useHistory();
  const getCurrencies = (country) => {
    let currencies = "";
    country.currencies.forEach((el, index) => {
      if (index < country.currencies.length - 1) {
        currencies += `${el.name},`;
      } else currencies += el.name;
    });
    return currencies;
  };
  const getLanguages = (country) => {
    let languages = "";
    country.languages.forEach((el, index) => {
      if (index != country.languages.length - 1) {
        languages += `${el.name},`;
      } else languages += el.name;
    });
    return languages;
  };
  return (
    <div className="w-full max-w-screen-xl   h-full px-4 pt-6 sm:pt-18 overflow-scroll">
      <div
        className="cursor-pointer flex shadow w-32 h-10 mb-14 rounded items-center bg-white justify-center"
        onClick={() => {
          history.push("/countries");
        }}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="1x" className="mr-4" />
        Back
      </div>
      <div className="flex flex-wrap items-center">
        <img
          src={country.flag}
          alt=""
          className="w-full md:w-400  h-auto md:mr-8 lg:mr-16 mb-12 md:mb-0"
        />
        <div className="flex-1 flex items-start flex-col justify-start">
          <h1 className="text-2xl font-bold mb-6 text-left">{country.name}</h1>
          <div className="space-y-6 md:space-y-0 text-left md:flex items-start justify-between w-full">
            <div className="space-y-2 text-left ">
              <p className="text-sm">
                <span className="font-semibold">Native name: </span>
                {country.nativeName}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Population: </span>
                {country.population}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-sm">
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Currencies: </span>
                {getCurrencies(country)}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Languages: </span>
                {getLanguages(country)}
              </p>
            </div>
          </div>
          <div className="flex items-start mt-12 md:mt-16">
            <p className="font-semibold text-sm mr-2 whitespace-nowrap">
              Border Countries:
            </p>
            <div className="flex flex-wrap">
              {country.borders.map((el) => {
                return (
                  <div className="shadow w-28 h-6 text-center rounded-sm bg-white text-xs flex items-center justify-center mx-1 mb-2">
                    <p>{el}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
