import { useContext } from "react"
import { UseCounter } from "../../Contexts/CountContext"
import React from 'react'

const CountIncrement: React.FC = () => {
    const { setCount } = UseCounter()
    return (
        <button onClick={() => setCount((x) => x + 1)} >Increment</button>
    )
}

export default CountIncrement