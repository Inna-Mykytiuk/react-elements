import PropTypes from "prop-types";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";

const ProgressBarContent = ({ rating, totalClicks, userRating }) => {
  const roundToDecimal = (value, decimals) => {
    const multiplier = 10 ** decimals;
    return Math.round(value * multiplier) / multiplier;
  };

  return (
    <div className='progress-bar'>
      <CircleProgressBar rating={rating} circleWidth='200' />
      <div>
        <p>Clicks: {totalClicks}</p>
        <p>Average rating: {roundToDecimal(rating, 1)}</p>
        <p>Your Rating: {userRating}</p>
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
