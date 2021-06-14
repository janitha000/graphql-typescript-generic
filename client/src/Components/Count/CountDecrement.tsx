import { useContext } from "react"
import { UseCounter } from "../../Contexts/CountContext"
import React from 'react'

const CountDecrement: React.FC = () => {

    const { setCount } = UseCounter()
    console.log('count decrement re rendered')
    return (
        <button onClick={() => setCount((x) => x - 1)} >Decrement</button>
    )
}

export default React.memo(CountDecrement)