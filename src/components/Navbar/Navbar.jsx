import { Link } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <nav className='nav-list'>
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
