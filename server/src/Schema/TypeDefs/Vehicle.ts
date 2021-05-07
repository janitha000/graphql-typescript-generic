import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const VehicleType = new GraphQLObjectType({
    name: "Vehicle",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        type: { type: GraphQLString },
        price: { type: GraphQLInt }
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
        type: "Audi",
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