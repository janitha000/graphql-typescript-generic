import { useRef, useState } from 'react'
import UseEventHandler from '../Hooks/useEventListener'
import useInput from '../Hooks/useInput'
import Vehicle from './Vehicle'

export type Vehicle = {
    name: string,
    year: number,
    type: "Audi" | "BMW" | "Benz",
    price?: number,
    img?: string
}

const Vehicles: React.FC = () => {
    const { value: name, bind: nameBind } = useInput("")
    const { value: year, bind: yearBind } = useInput(0)
    const { value: type, bind: typeBind } = useInput(0)
    const { value: price, bind: priceBind } = useInput("")

    let refValue = useRef("janitha")
    const [renderOnce, setRenderOnce] = useState(false)



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(name)
    }


    const Vehicles: Vehicle[] = [
        {
            name: "A4",
            type: 'Audi',
            year: 2020,
            price: 25000,
            img: "https://i.i-sgcm.com/new_cars/cars/12545/12545_m.jpg"
        },
        {
            name: "328i",
            type: 'BMW',
            year: 2020,
            price: 32000,
            img: "https://www.motortrend.com/uploads/sites/5/2013/10/2012-BMW-328i-front-three-quarters-view.jpg?fit=around%7C875:492"
        }
    ]
    return (
        <>
            <div className="vehicles" style={{ display: "flex", justifyContent: "space-evenly" }}>
                {Vehicles.map(({ name, year, type, price, img }) => (
                    <Vehicle name={name} type={type} price={price} year={year} key={name} img={img} />
                ))}

            </div>

            <div className="vehicles__form" style={{ marginTop: "2rem" }}>
                <form onSubmit={handleSubmit}>
                    <label>Name: <input type="text" {...nameBind} /></label>
                    <label>Type: <input type="text" {...typeBind} /></label>
                    <label>Year: <input type="text" {...yearBind} /></label>
                    <label>Price: <input type="text" {...priceBind} /></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <p>This is ref value {refValue.current}</p> <button onClick={() => refValue.current = "Vindya"}>Click to change Ref Value</button>
            <button onClick={() => setRenderOnce((x) => !x)}>Render</button>


        </>
    )
}

export default Vehicles
