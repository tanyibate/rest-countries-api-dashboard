import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar({ setCountrySearched }) {
  function changeHandler(event) {
    setCountrySearched(event.target.value);
  }
  return (
    <div className="shadow-md w-full h-14 flex items-center sm:w-1/2 lg:w-2/5 h-14 pl-12 py-4 pr-2 rounded-md mb-10 bg-white md:ml-2">
      <FontAwesomeIcon icon={faSearch} className="mr-4" size="1x" />
      <input
        type="text"
        className="border-0 outline-none h-full flex-1"
        placeholder="Search for a country"
        onChange={changeHandler}
      />
    </div>
  );
}
