import { useContext } from "react"
import { CountContextProvider, UseCounter } from "../../Contexts/CountContext"
import CountDecrement from "./CountDecrement"
import CountIncrement from "./CountIncrement"

const CountItem: React.FC = () => {
    const { count } = UseCounter()
    return (
        <>
            <div className="">Current value of the counter is {count}</div>
            <CountIncrement />
            <CountDecrement />
        </>
    )
}

const Count: React.FC = () => {
    return (
        <CountContextProvider >
            <CountItem />
        </CountContextProvider>
    )
}

export default Count