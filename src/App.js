import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="title" >
        <h1>Contador de Clicks</h1>
      </div>
      <div className="main-container">
        <Counter
          numClicks={numClicks}/>

        <Button
          text="Click"
          isClickButton={true}
          handleClick={handleClick} />
        <Button
          text="Restart"
          isClickButton={false}
          handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
