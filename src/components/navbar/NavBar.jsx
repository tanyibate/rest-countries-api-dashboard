import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div
      className="flex justify-between items-center w-full shadow-md bg-white absolute top-0 left-0 px-4 md:px-12 lg:px-16"
      style={{ height: "60px" }}
    >
      <p className="text-xl sm:text-xl font-bold">Where in the world?</p>
      <div className="flex items-center text-sm cursor-pointer">
        <FontAwesomeIcon icon={faMoon} className="mr-1" />
        Dark Mode
      </div>
    </div>
  );
}
