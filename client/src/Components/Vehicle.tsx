
import React, { Suspense, useState } from 'react'
import './Vehicle.css'

const MoreInfo = React.lazy(() => import('./MoreInfo'));

export interface IVehicleProps {
    name: string,
    year: number,
    type: "Audi" | "BMW" | "Benz",
    price?: number,
    img?: string
}

interface IItemProps {
    label: string,
    value?: string | number
}

const VehicleItem = (props: IItemProps) => {
    const { label, value } = props
    return (
        <div className="vehicle__item">
            <div className="vehicle__item__label"><span>{label}</span></div>
            <div className="vehicle__item__value"><span>{value}</span></div>
        </div>
    )
}


const Vehicle: React.FC<IVehicleProps> = ({ name, year, type, price, img }) => {
    const [moreInfo, setMoreInfo] = useState(false);

    return (
        <div className="vehicle">
            <div className="vehicle__img"><img src={img} alt="Audi A4" /></div>
            <div className="vehicle__items">
                <VehicleItem label="Year" value={year} />
                <VehicleItem label="Name" value={name} />
                <VehicleItem label="Type" value={type} />
                <VehicleItem label="Price" value={price} />
            </div>
            <button onClick={() => setMoreInfo((pre) => !pre)} >More Info </button>
            <Suspense fallback={<div>Loading... </div>}>
                {(moreInfo && <MoreInfo />)}
            </Suspense>

        </div>
    )
}

export default Vehicle
