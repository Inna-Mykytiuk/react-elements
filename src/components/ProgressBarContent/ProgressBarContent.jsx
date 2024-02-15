import PropTypes from "prop-types";
import "./ProgressBarContent.css";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";

const ProgressBarContent = ({ rating, totalClicks, userRating }) => {
  const roundToDecimal = (value, decimals) => {
    const multiplier = 10 ** decimals;
    return Math.round(value * multiplier) / multiplier;
  };

  return (
    <div className='progress-bar'>
      <CircleProgressBar rating={rating} circleWidth='100' />
      <div className='progress-text'>
        <h2>Players</h2>
        <p className='votes'>{`${totalClicks} votes`}</p>
        <p className='rating'>
          Average rating: <span>{roundToDecimal(rating, 1)}</span>
        </p>
        <p className='rating'>
          Your Rating: <span>{userRating}</span>
        </p>
      </div>
    </div>
  );
};

ProgressBarContent.propTypes = {
  rating: PropTypes.number.isRequired,
  totalClicks: PropTypes.number.isRequired,
  userRating: PropTypes.number.isRequired,
};

export default ProgressBarContent;
