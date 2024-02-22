import { FaFilter, FaApple } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./BurgerMenu.css";

const BurgerMenu = ({ isOpen }) => {
  return (
    <div className={isOpen ? "mobile-list opened" : "mobile-list"}>
      <Link to={"/"} className='mobile-item'>
        <MdPhoneIphone />
        <p>Menu item 1</p>
      </Link>
      <Link to={"/"} className='mobile-item'>
        <FaFilter />
        <p>Menu item 2</p>
      </Link>
      <Link to={"/"} className='mobile-item'>
        <BsAndroid2 />
        <p>Menu item 3</p>
      </Link>
      <Link to={"/"} className='mobile-item'>
        <FaApple />
        <p>Menu item 4</p>
      </Link>
    </div>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
