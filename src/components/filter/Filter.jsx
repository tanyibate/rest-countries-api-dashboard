import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <div className="flex items-center w-56 justify-between h-14 pl-8 rounded shadow-md mb-1 font-semibold bg-white mb-10">
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
          <p className="">Africa</p>
          <p className="">Asia</p>
          <p className="">Americas</p>
          <p className="">Europe</p>
          <p className="">Ocenia</p>
        </div>
      )}
    </div>
  );
}
