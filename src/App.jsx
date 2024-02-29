import { useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navbar from "./components/Navbar/Navbar";
import LogoSection from "./components/LogoSection/LogoSection";
import MainSection from "./components/MainSection/MainSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='App' data-theme={darkMode ? "dark" : "light"}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <LogoSection />
      <ProgressBar />
      <MainSection />
    </div>
  );
}

export default App;
