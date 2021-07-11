import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="w-72 overflow-hidden shadow-md rounded bg-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
        alt=""
        className="h-44"
      />
      <div className="h-44 px-6  text-left">
        <p className="text-lg my-4 font-bold">Germany</p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold">Population: </span>
            12,100,200
          </p>
          <p className="text-sm">
            <span className="font-semibold">Region: </span>
            Western Europe
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital: </span>
            Berlin
          </p>
        </div>
      </div>
    </div>
  );
}
