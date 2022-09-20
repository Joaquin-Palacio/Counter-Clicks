import "./App.css";
import image from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };
  const handleRestart = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-img-container">
        <img className="freecodecamp-img" src={image} alt="freeCodeCampImage" />
      </div>
      <div className="counter-container">
        <Counter totalClicks={numClicks} />
        <Button text="Click" isBtnClick={true} useClick={handleClick} />
        <Button text="Restart" isBtnClick={false} useClick={handleRestart} />
      </div>
    </div>
  );
}

export default App;
