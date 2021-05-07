import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ADD_VEHICLE } from "./Mutations/Vehicle";
import { GET_ALL_VEHICLES } from './Queries/Vehicle'
import { VehicleInput } from "./TypeDefs/Vehicle";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllVehicles: GET_ALL_VEHICLES
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addVehicle: ADD_VEHICLE
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})