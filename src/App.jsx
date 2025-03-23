import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [lights, setLights] = useState({
    red: false,
    amber: false,
    green: false,
  });

  const toggleLight = (color) => {
    setLights((prevLights) => {
      const newLights = { red: false, amber: false, green: false };
      newLights[color] = !prevLights[color];
      return newLights;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case '1':
          toggleLight('red');
          break;
        case '2':
          toggleLight('amber');
          break;
        case '3':
          toggleLight('green');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
   
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleLight]);

  return (
    <div className="App">
      <h1>ROBOT CONTROLLER</h1>
      <span>Click on the Robot's Color to Turn it On</span>

      <div id="box" role="group" aria-label="Robot Controller Lights">
        <button
          className={`circle ${lights.red ? 'redOn' : 'redOff'}`}
          onClick={() => toggleLight('red')}
          aria-pressed={lights.red}
          aria-label="Red Light"
        ></button>
        <button
          className={`circle ${lights.amber ? 'amberOn' : 'amberOff'}`}
          onClick={() => toggleLight('amber')}
          aria-pressed={lights.amber}
          aria-label="Amber Light"
        ></button>
        <button
          className={`circle ${lights.green ? 'greenOn' : 'greenOff'}`}
          onClick={() => toggleLight('green')}
          aria-pressed={lights.green}
          aria-label="Green Light"
        ></button>
      </div>
    </div>
  );
}

export default App;