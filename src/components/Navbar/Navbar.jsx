import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaFilter,
  FaInstagram,
  FaApple,
  FaYoutube,
  FaWifi,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiGooglenews } from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa6";
import "./Navbar.css";
import ToggleBtn from "../ui/ToggleBtn/ToggleBtn";
const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='navbar'>
      <div className='container'>
        <nav className='nav-wrapper'>
          <div className='nav-list'>
            <Link to={"/"} className='nav-item'>
              <MdPhoneIphone className='phone-svg' />
              <p>Menu item 1</p>
            </Link>
            <Link to={"/"} className='nav-item'>
              <FaFilter className='phone-svg' />
              <p>Menu item 2</p>
            </Link>
            <Link to={"/"} className='nav-item'>
              <BsAndroid2 className='phone-svg' />
              <p>Menu item 3</p>
            </Link>
            <Link to={"/"} className='nav-item'>
              <FaApple className='phone-svg' />
              <p>Menu item 4</p>
            </Link>
          </div>
          <div className='list-wrapper'>
            <ul className='social-list'>
              <li className='social-item'>
                <ImFacebook />
              </li>
              <li className='social-item'>
                <FaTwitter />
              </li>
              <li className='social-item'>
                <FaInstagram />
              </li>
              <li className='social-item'>
                <FaYoutube />
              </li>
              <li className='social-item'>
                <SiGooglenews />
              </li>
              <li className='social-item'>
                <FaWifi />
              </li>
            </ul>
            <ToggleBtn handleChange={toggleDarkMode} isChecked={darkMode} />
          </div>
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
