import './App.css';
import image from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {

  const handleClick = () => {

  }

  const handleRestart = () => {

  }

  return (
    <div className="App">
      <div className="freecodecamp-img-container">
        <img
          className="freecodecamp-img"
          src={image}
          alt="freeCodeCampImage"
        />
      </div>
      <div className="counter-container">
        <Counter />
        <Button 
          text='Click'
          isBtnClick={true}
          useClick={handleClick}
        />
        <Button 
          text='Restart'
          isBtnClick={false}
          useClick={handleRestart}
        />
      </div>
    </div>
  );
}

export default App;
