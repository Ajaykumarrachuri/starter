import { React } from "react";
import "./index.css";
import hamburger from "/home/ajay/projects/starter/src/library/assets/hamburger.svg";
import logo from "/home/ajay/projects/starter/src/library/assets/logo.svg";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between space-x-4 bg-blue-400 py-6 px-6">
      <a href="#" className="ml-4">
        <img
          className="h-14"
          src={logo}
          alt="Themes.dev Logo"
          title="Themes.dev Logo"
        />
      </a>
      <nav className="flex justify-between items-center">
        <a href="#" className="invisible md:visible md:mr-6">
          Home
        </a>
        <a href="#" className="invisible md:visible md:mr-6">
          Stocks
        </a>
        <a href="#" className="invisible md:visible md:mr-6">
          Mutuals
        </a>
        <a href="#" className="invisible md:visible md:mr-6">
          Crypto
        </a>
        <a href="#" className="invisible md:visible md:mr-6">
          News
        </a>
        <a href="#" className="invisible md:visible md:mr-6">
          About
        </a>
        <a href="#" className="block">
          <img
            className="h-12"
            src={hamburger}
            alt="Themes.dev Logo"
            title="Themes.dev Logo"
          />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
