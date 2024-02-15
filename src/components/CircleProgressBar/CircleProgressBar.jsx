import PropTypes from "prop-types";
import "./CircleProgressBar.css";

const CircleProgressBar = ({ rating, circleWidth }) => {
  const roundToDecimal = (value, decimals) => {
    const multiplier = 10 ** decimals;
    return Math.round(value * multiplier) / multiplier;
  };
  const radius = 40;

  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray * (1 - rating / 10);

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id='gradient'>
            <stop offset='10%' stopColor='#f36536' />
            <stop offset='70%' stopColor='#fcc539' />
            <stop offset='100%' stopColor='#f36536' />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth='8px'
          className='circle-bcg'
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth='8px'
          className='circle-progress'
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke='url(#gradient)'
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
