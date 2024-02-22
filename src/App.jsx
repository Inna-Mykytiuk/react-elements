import { useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navbar from "./components/Navbar/Navbar";
import LogoSection from "./components/LogoSection/LogoSection";

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
    </div>
  );
}

export default App;
