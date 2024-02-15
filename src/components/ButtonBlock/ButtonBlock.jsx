import PropTypes from "prop-types";

const ButtonsBlock = ({ handleButtonClick }) => {
  return (
    <div className='buttons-block'>
      {[...Array(10).keys()].map((index) => (
        <button key={index + 1} onClick={() => handleButtonClick(index)}>
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
