import { useContext, useEffect, useMemo, useRef } from "react"
import { UseCounter } from "../../Contexts/CountContext"
import React from 'react'

const CountIncrement: React.FC = () => {
    const { setCount } = UseCounter()
    let renderCount = useRef(0)

    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    //     console.log(renderCount.current)


    // }, [])

    // if (renderCount.current === 0)
    //     throw new Error('I crashed!');




    return (
        <button onClick={() => setCount((x) => x + 1)} >Increment</button>
    )
}

export default CountIncrement