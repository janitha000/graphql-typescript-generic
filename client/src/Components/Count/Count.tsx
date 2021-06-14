import { FunctionComponent, ReactElement, useContext, useEffect } from "react"
import { CountContextProvider, UseCounter } from "../../Contexts/CountContext"
import CountDecrement from "./CountDecrement"
import CountIncrement from "./CountIncrement"
import React from 'react'
import { ErrorBoundary } from "react-error-boundary"

const CountItem: React.FC = () => {
    const { count } = UseCounter()

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    return (
        <>
            <div className="">Current value of the counter is {count}</div>
            {/* <ErrorBoundary fallback={<div>Something went wrong...</div>} > */}
            <CountIncrement />
            <CountDecrement />
            {/* </ErrorBoundary> */}

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

// const  ErrorFallback: ReactElement<unknown, string | FunctionComponent<{}>> = (type, props, key) =>{
//     return (
//       <div role="alert">
//         <p>Something went wrong:</p>
//         <pre>{error.message}</pre>
//         <button onClick={resetErrorBoundary}>Try again</button>
//       </div>
//     )
//   }

export default Count