import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {

  const [clicksNum, setClicksNum] = useState(0);

  const handleClick = () => {
    console.log('click')
    setClicksNum(clicksNum + 1);
  }

  const RestartCounter = () => {
    console.log('RestartCounter')
    setClicksNum(0);
  }
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
      <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Counter clicksNum={clicksNum}/>

        <Button text="Click" isClickButton={true} onClick={handleClick}/>
        <Button text="Restart" isClickButton={false} onClick={RestartCounter}/>
      </div>



    </div>
  );
}

export default App;
