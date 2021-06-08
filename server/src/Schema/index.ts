import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { SPOTIFY_LOGIN, SPOTIFY_LOGIN_REFRESH } from "./Mutations/Spotify";
import { ADD_VEHICLE } from "./Mutations/Vehicle";
import { GET_ALL_BRANDS, GET_BRAND_BY_NAME } from "./Queries/Brand";
import { GET_ALL_VEHICLES } from './Queries/Vehicle'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllVehicles: GET_ALL_VEHICLES,
        getAllBrands: GET_ALL_BRANDS,
        getBrandByName: GET_BRAND_BY_NAME
    }
})


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addVehicle: ADD_VEHICLE,
        spotifyLogin: SPOTIFY_LOGIN,
        spotigyLoginRefresh: SPOTIFY_LOGIN_REFRESH
    }
})

export const schema = new GraphQLSchema({

    query: RootQuery,
    mutation: Mutation
})