import "./ToggleBtn.css";
import PropTypes from "prop-types";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const ToggleBtn = ({ handleChange, isChecked }) => {
  return (
    <div className='toggle-container'>
      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor='check'>
        <div className='icon-container'>
          {isChecked ? <IoMdMoon size={20} /> : <MdOutlineWbSunny size={20} />}
        </div>
      </label>
    </div>
  );
};

ToggleBtn.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default ToggleBtn;
