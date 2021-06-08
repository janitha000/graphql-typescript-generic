import React from 'react'
import { Brand } from './GraphQLVehicles'
import './GraphQLVehicle.css'
import GVehicle from './GVehicle'

interface props {
    brand: Brand
    onRefresh: () => void
}



const GBrand: React.FC<props> = ({ brand, onRefresh }) => {
    return (
        <div className="gvehicle__items--brand">
            <h2>{brand.name}</h2>
            <h3>{brand.founded}</h3>
            <p>Vehicles</p>
            {brand.vehicles.map((vehicle) => (<GVehicle {...vehicle} />))}
            <button onClick={onRefresh}>Refresh</button>
        </div>
    )
}

export default GBrand