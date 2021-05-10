import React, { useContext, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Vehicles from './Components/Vehicles'
import { UserContext } from './Contexts/UserContext';

const App: React.FC = (): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const { state, dispatch } = useContext(UserContext)
  let didRun = useRef(false)

  const { username } = state;

  const useEffectOnce = (cb: () => void) => {
    if (!didRun.current) {
      cb();
    }
    didRun.current = true;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('called')
      setTime(new Date(Date.now()));
    }, 1000);

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const username = localStorage.getItem("user") || ""
    dispatch({ type: "reset", payload: username })
  }, [])





  return (
    <div className="App">
      This is a typescript react
      <Vehicles />
      <div className="app__time">{time.toUTCString()}</div>
      {(username) ? <p>{username} logged in</p> : <p>User is not logged in</p>}
    </div>
  );
}

export default App;
