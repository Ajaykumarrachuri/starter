import { React } from "react";
import "./index.css";
import hamburger from "/home/ajay/projects/starter/src/library/assets/hamburger.svg";
import logo from "/home/ajay/projects/starter/src/library/assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between space-x-4 bg-blue-400 py-6 px-6">
      <Link to="/" className="ml-4">
        <img
          className="h-14"
          src={logo}
          alt="Themes.dev Logo"
          title="Themes.dev Logo"
        />
      </Link>
      <nav className="flex justify-between items-center">
        <Link to="/" className="invisible md:visible md:mr-6">
          Home
        </Link>
        <Link to="/stock" className="invisible md:visible md:mr-6">
          Stocks
        </Link>
        <Link to="/" className="invisible md:visible md:mr-6">
          Mutuals
        </Link>
        <Link to="/" className="invisible md:visible md:mr-6">
          Crypto
        </Link>
        <Link to="/" className="invisible md:visible md:mr-6">
          News
        </Link>
        <Link to="/" className="invisible md:visible md:mr-6">
          About
        </Link>
        <Link to="/" className="block">
          <img
            className="h-12"
            src={hamburger}
            alt="Themes.dev Logo"
            title="Themes.dev Logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
