import useInput from '../Hooks/useInput'
import Vehicle from './Vehicle'

export type Vehicle = {
    name: string,
    year: number,
    type: "Audi" | "BMW" | "Benz",
    price?: number
}

const Vehicles: React.FC = () => {
    const { value: name, bind: nameBind } = useInput("")
    const { value: year, bind: yearBind } = useInput(0)
    const { value: type, bind: typeBind } = useInput(0)
    const { value: price, bind: priceBind } = useInput("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(name)
    }


    const Vehicles: Vehicle[] = [
        {
            name: "A4",
            type: 'Audi',
            year: 2020,
            price: 25000
        }, {
            name: "328i",
            type: 'BMW',
            year: 2020,
            price: 32000
        }
    ]
    return (
        <>
            <div className="vehicles">
                {Vehicles.map(({ name, year, type, price }) => (
                    <Vehicle name={name} type={type} price={price} year={year} key={name} />
                ))}
            </div>
            <div className="vehicles__form">
                <form onSubmit={handleSubmit}>
                    <label>Name: <input type="text" {...nameBind} /></label>
                    <label>Type: <input type="text" {...typeBind} /></label>
                    <label>Year: <input type="text" {...yearBind} /></label>
                    <label>Price: <input type="text" {...priceBind} /></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default Vehicles
