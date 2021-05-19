import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { BRANDS, BrandType } from "./Brand";

export const VehicleType = new GraphQLObjectType({
    name: "Vehicle",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        type: { type: GraphQLString },
        price: { type: GraphQLInt },
        brandFounded: {
            type: GraphQLInt,
            resolve: (parent) => getBrandFound(parent.type)
        }
    })
})

export const VehicleInputType = new GraphQLInputObjectType({
    name: "VehileInput",
    fields: () => ({
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        type: { type: GraphQLString },
        price: { type: GraphQLInt }
    })
})


export const VEHICLES: Vehicle[] = [
    {
        name: "A4",
        year: 2020,
        type: "AUDI",
        price: 25000
    },
    {
        name: "320i",
        year: 2020,
        type: "BMW",
        price: 28000
    },
    {

        name: "C Class",
        year: 2020,
        type: "BENZ",
        price: 31000
    }

]


export interface Vehicle {
    name: string,
    year: number,
    type: string,
    price?: number
}

export interface VehicleInput {
    name: string,
    year: number,
    type: string,
    price?: number
}

const getBrandFound = (type: string): number => {
    return BRANDS.filter(x => x.name === type)[0].founded;
}