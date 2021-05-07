import React from 'react'
import './Vehicle.css'

export interface IVehicleProps {
    name: string,
    year: number,
    type: "Audi" | "BMW" | "Benz",
    price?: number
}


const Vehicle: React.FC<IVehicleProps> = ({ name, year, type, price }) => {
    return (
        <div className="vehicle">
            <div className="vehicle__item"><span>{year}</span></div>
            <div className="vehicle__item"><span>{name}</span></div>
            <div className="vehicle__item"><span>{type}</span></div>
            <div className="vehicle__item"><span>{price}</span></div>
        </div>
    )
}

export default Vehicle
