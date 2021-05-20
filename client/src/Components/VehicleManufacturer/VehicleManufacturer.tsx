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

    let Results = data.Results;
    if (loading) return <div>Loading...</div>
    if (!Results || Results.length === 0) return <div>No Content Found</div>

    console.log(Results)

    return (
        <div className="vehicleM">
            {Results.map((item) => (
                <div className="vehicleM__item">
                    <p>Country: {item.Country}</p>
                    <p>Company Name: {item.Mfr_CommonName}</p>
                </div>
            ))}

        </div>
    )


}

export default VehicleManufacturer


