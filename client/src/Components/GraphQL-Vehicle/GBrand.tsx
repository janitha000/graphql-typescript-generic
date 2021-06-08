import React from 'react'
import { Brand } from './GraphQLVehicles'
import './GraphQLVehicle.css'




const GBrand: React.FC<Brand> = (brand) => {
    return (
        <div className="gvehicle__items--brand">
            <h2>{brand.name}</h2>
            <h3>{brand.founded}</h3>
        </div>
    )
}

export default GBrand