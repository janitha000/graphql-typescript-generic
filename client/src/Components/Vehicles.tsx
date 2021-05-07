import React from 'react'
import Vehicle from './Vehicle'

type Vehicle = {
    name: string,
    year: number,
    type: "Audi" | "BMW" | "Benz",
    price?: number
}

const Vehicles: React.FC = () => {
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
        <div>
            {Vehicles.map(({ name, year, type, price }) => (
                <Vehicle name={name} type={type} price={price} year={year} />
            ))}
        </div>
    )
}

export default Vehicles
