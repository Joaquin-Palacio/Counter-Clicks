import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handleAddClick = () => {
    setNumClicks(numClicks + 1);
  };

  const handleSubtractClick = () => {
    setNumClicks(numClicks - 1);
  };

  const handleRestart = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <Counter totalClicks={numClicks} />
        <Button text="+1" isBtnClick={true} useClick={handleAddClick} />
        <Button text="-1" isBtnClick={true} useClick={handleSubtractClick} />
        <Button text="Restart" isBtnClick={false} useClick={handleRestart} />
      </div>
    </div>
  );
}

export default App;
