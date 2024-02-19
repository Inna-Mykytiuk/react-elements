import PropTypes from "prop-types";
import { useState } from "react";
import "./ButtonBlock.css";

const ButtonsBlock = ({ handleButtonClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    handleButtonClick(index);
    setActiveButton(index);
  };

  return (
    <div className='buttons-block'>
      {[...Array(10).keys()].map((index) => (
        <button
          key={index + 1}
          onClick={() => handleClick(index)}
          className={`progress-btn ${index === 0 ? "first-btn" : ""} ${
            index === 9 ? "last-btn" : ""
          } ${
            activeButton !== null && index <= activeButton ? "active-btn" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

ButtonsBlock.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default ButtonsBlock;
