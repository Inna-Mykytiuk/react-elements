import { Link } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import "./Navbar.css";
import ToggleBtn from "../ui/ToggleBtn/ToggleBtn";
import PropTypes from "prop-types";
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

          <ToggleBtn handleChange={toggleDarkMode} isChecked={darkMode} />
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
