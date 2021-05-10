import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Vehicles from './Components/Vehicles'

const App: React.FC = (): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('called')
      setTime(new Date(Date.now()));
    }, 1000);

    return () => clearTimeout(timer)
  }, [])




  return (
    <div className="App">
      This is a typescript react
      <Vehicles />
      <div className="app__time">{time.toUTCString()}</div>
    </div>
  );
}

export default App;
