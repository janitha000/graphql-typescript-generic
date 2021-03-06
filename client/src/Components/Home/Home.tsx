import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import UseEventHandler from '../../Hooks/useEventListener';
import Vehicles from '../Vehicles'
import '../../App.css'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    const { state, dispatch } = useContext(UserContext)
    let didRun = useRef(false)

    const handlerCallback = useCallback(() => {
        alert('clicked from callback')
    }, [])

    // UseEventHandler({ eventType: 'click', handler: handlerCallback })

    // UseEventHandler({
    //   eventType: "click", handler: () => {
    //     alert('clicked')
    //   }
    // })

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
            <Link to='/gvehicles'>Get Vehicles from API</Link>
            <Vehicles />
            <div className="app__time">{time.toUTCString()}</div>
            {(username) ? <p>{username} logged in</p> : <p>User is not logged in</p>}
        </div>
    )
}

export default Home