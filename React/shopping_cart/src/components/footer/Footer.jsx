// import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";

export default function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer
      className="text-gray-600 body-font bg-gray-300"
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
 