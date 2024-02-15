import PropTypes from "prop-types";
import "./CircleProgressBar.css";

const CircleProgressBar = ({ rating, circleWidth }) => {
  const roundToDecimal = (value, decimals) => {
    const multiplier = 10 ** decimals;
    return Math.round(value * multiplier) / multiplier;
  };
  const radius = 85;

  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray * (1 - rating / 10);
  // const dashOffset = dashArray - (dashArray * raiting) / 10;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth='15px'
          className='circle-bcg'
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth='15px'
          className='circle-progress'
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='0.3em'
          fill='#7f7b7b'
          className='circle-text'
        >
          {roundToDecimal(rating, 1)}
        </text>
      </svg>
    </div>
  );
};

CircleProgressBar.propTypes = {
  rating: PropTypes.number.isRequired,
  circleWidth: PropTypes.string.isRequired,
};

export default CircleProgressBar;
