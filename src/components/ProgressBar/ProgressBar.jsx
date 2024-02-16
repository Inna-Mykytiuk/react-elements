import { useState } from "react";
import ProgressBarContent from "../ProgressBarContent/ProgressBarContent";
import ButtonsBlock from "../ButtonBlock/ButtonBlock";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [rating, setRating] = useState(0);
  const [clicks, setClicks] = useState(Array(10).fill(0));
  const [totalClicks, setTotalClicks] = useState(0);
  const [userRating, setUserRating] = useState(0);

  const handleButtonClick = (index) => {
    const newClicks = [...clicks];
    newClicks[index]++;
    setClicks(newClicks);

    const newTotalClicks = newClicks.reduce((acc, click) => acc + click, 0);
    const newTotalRating = newClicks.reduce(
      (acc, click, i) => acc + click * (i + 1),
      0
    );

    setTotalClicks(newTotalClicks);
    setRating(newTotalRating / newTotalClicks);

    setUserRating(index + 1);
  };

  return (
    <section className='progress-section'>
      <div className='container'>
        <ProgressBarContent
          rating={rating}
          totalClicks={totalClicks}
          userRating={userRating}
        />
        <ButtonsBlock handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
};

export default ProgressBar;
