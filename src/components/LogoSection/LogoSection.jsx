import { Link } from "react-router-dom";
import { useState } from "react";
import LogoIcon from "../../assets/logo.svg?react";
import "./LogoSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../ui/SearchBar/SearchBar";

const LogoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='logo-section'>
      <div className='container'>
        <nav className='nav'>
          <Link to={"/"} className='logo'>
            <LogoIcon aria-label='logo-icon' className='logo-icon' />
          </Link>
          <button className='burger' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className='menu-wrapper'>
            <ul className={isOpen ? "menu-list opened" : "menu-list"}>
              <li>
                <Link to={"/"}>Item 1</Link>
              </li>
              <li>
                <Link to={"/"}>Item 2</Link>
              </li>
              <li>
                <Link to={"/"}>Item 3</Link>
              </li>
              <li>
                <Link to={"/"}>Item 4</Link>
              </li>
              <li>
                <Link to={"/"}>Item 5</Link>
              </li>
            </ul>
            <SearchBar isOpen={isOpen} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LogoSection;
