import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Filter({ setRegionSearched }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center w-56 justify-between h-14 pl-8 rounded shadow-md mb-1 font-semibold bg-white mb-10 md:mr-2">
        Filter by Region
        <FontAwesomeIcon
          icon={faChevronDown}
          className="mr-4 cursor-pointer"
          size="1x"
          onClick={() => {
            setActive(!active);
          }}
        />
      </div>
      {active && (
        <div className="w-56 justify-between  rounded shadow-md text-left font-semibold pl-8 space-y-4 py-4 absolute bg-white top-14 mt-1">
          <p
            className="cursor-pointer"
            onClick={() => {
              setRegionSearched("africa");
              setActive(!active);
            }}
          >
            Africa
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setRegionSearched("asia");
              setActive(!active);
            }}
          >
            Asia
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setRegionSearched("americas");
              setActive(!active);
            }}
          >
            Americas
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setRegionSearched("europe");
              setActive(!active);
            }}
          >
            Europe
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setRegionSearched("oceania");
              setActive(!active);
            }}
          >
            Ocenia
          </p>
        </div>
      )}
    </div>
  );
}
