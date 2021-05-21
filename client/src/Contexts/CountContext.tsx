import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ICountContext {
    count?: number,
    setCount: Dispatch<SetStateAction<number>>
}

const initalValue: ICountContext = {
    count: 0,
    setCount: () => { }

}

const CountContext = createContext(initalValue)

export const UseCounter = () => {
    const context = useContext(CountContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context;
}

export const CountContextProvider = ({ initialValue, children }: any) => {
    const [count, setCount] = useState(0)

    return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>
}