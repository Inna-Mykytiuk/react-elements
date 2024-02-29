import Content from "../Content/Content";
import Aside from "../ui/Aside/Aside";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className='main-section'>
      <div className='container'>
        <div className='main-wrapper'>
          <Content />
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
