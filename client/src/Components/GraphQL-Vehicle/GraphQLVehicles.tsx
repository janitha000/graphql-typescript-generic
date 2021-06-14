import React from 'react'
import GBrand from './GBrand'
import './GraphQLVehicle.css'

import gql from 'graphql-tag'
import { useGraphQLQuery } from '../../Hooks/useGraphQLQuery'

const GET_BRANDS = gql`
    query{
        getAllBrands{
        name
        founded
        vehicles{
            name
            price
        }
        }
    } 
`

const GET_BRAND_BY_NAME = gql`
    query($name: String!){
        getBrandByName(name: $name){
        name
        founded
        }
    }
`
const GraphQLVehicles: React.FC = () => {
    const { data, isError, isLoading, refetch } = useGraphQLQuery('brands', GET_BRANDS)

    const onRefreshClick = () => {
        console.log('refresh')
        refetch()

    }

    return (
        <div className="gvehicle">
            <div className="gvehicle__title">Vehicle Brands</div>
            <div className="gvehicle__items">
                {isLoading && <div>Loading data...</div>}
                {isError && <div className="error">Something is wrong.</div>}
                {data && data.getAllBrands.map((brand: Brand) => (<GBrand brand={brand} onRefresh={onRefreshClick} />))}

            </div>
        </div>
    )
}

export interface Brand {
    founded: number,
    name: string,
    vehicles: [{
        name: string,
        price: number
    }]
}

export default GraphQLVehicles