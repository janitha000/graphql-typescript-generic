import { useState } from "react";
import useFetch from "../../Hooks/useFetch"

interface VehicleManufacturer {
    Country: string,
    Mfr_CommonName: string
    VehicleTypes: [{
        Name: string
    }]
}

interface APIResponse {
    data: {
        Results: VehicleManufacturer[]
    },
    loading: boolean,
    error: boolean
}

const VehicleManufacturer: React.FC = () => {
    const { data, loading }: APIResponse = useFetch({ url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json' })
    const [renderOnce, setRenderOnce] = useState(false)

    let Results = data.Results;
    if (loading) return <div>Loading...</div>
    if (!Results || Results.length === 0) return <div>No Content Found</div>

    return (
        <>
            <button onClick={() => setRenderOnce((x) => !x)}>Render</button>
            <div className="vehicleM">
                {Results.map((item, i) => (
                    <div className="vehicleM__item" key={i}>
                        <p>Country: {item.Country}</p>
                        <p>Company Name: {item.Mfr_CommonName}</p>
                    </div>
                ))}

            </div>
        </>
    )


}

export default VehicleManufacturer


