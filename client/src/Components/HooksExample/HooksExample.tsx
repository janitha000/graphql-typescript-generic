import { useCallback, useEffect, useMemo, useState } from "react"

const HooksExample: React.FC = () => {
    const [renderOnce, setRenderOnce] = useState(false)
    const [state, setState] = useState(false)
    const [age, setAge] = useState(50)

    const val = useMemo(() => 50, []);
    const func = useCallback(() => {
        console.log('function executed')
    }, [])

    const notMemoizedValue = (age: number) => {
        console.log('recalculating the value')
        let i = 0;
        while (i < 2000) i++;

        if (age % 2 === 0) return "Even";
        else return "Odd";
    }

    const memoizedValue = useMemo(() => {
        console.log('recalculating the value')
        let i = 0;
        while (i < 2000) i++;

        if (age % 2 === 0) return "Even";
        else return "Odd";
    }, [age])



    useEffect(() => {
        console.log('use effect called')
    }, [state])

    return (
        <>
            <button onClick={() => setRenderOnce((x) => !x)}>Render</button>
            <button onClick={() => setState((x) => !x)}>Change State</button>
            <button onClick={() => setAge(() => 75)}>Change State</button>
            {memoizedValue}
            <br />
            <Child func={func} val={val} />
        </>
    )

}

const Child: React.FC<childProps> = ({ func, val }) => {
    useEffect(() => {
        console.log(val)
        func()
    }, [func, val])

    return (<div>The value is {val}</div>)
}

interface childProps {
    func: () => void,
    val: number
}

interface Person {
    name: string,
    age: number,
    gender?: string
}

const items: Person[] = [{
    name: "janitha",
    age: 21
},
{
    name: "vindya",
    age: 23
}]

export default HooksExample

