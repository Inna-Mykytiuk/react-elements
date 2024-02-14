import { useState } from "react";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";

const ProgressBar = () => {
  const [rating, setRating] = useState(1);

  return (
    <section className='progress-section'>
      <div className='container'>
        <div>
          <CircleProgressBar rating={rating} circleWidth='200' />
          <input
            type='range'
            min='0'
            max='10'
            step='0.1' // Use a smaller step for decimal values
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value).toFixed(1))}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
