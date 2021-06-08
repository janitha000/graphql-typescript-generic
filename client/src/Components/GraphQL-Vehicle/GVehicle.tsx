import React from 'react'
import './GraphQLVehicle.css'

interface Vehicle {
    name: string,
    price: number
}
const GVehicle: React.FC<Vehicle> = (vehicle) => {
    return (
        <div className="gvehicle__vehicle">
            <p>{vehicle.name}</p>
            <p>{vehicle.price}</p>


        </div>
    )
}

export default GVehicle