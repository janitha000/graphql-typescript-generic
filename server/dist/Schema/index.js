"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Spotify_1 = require("./Mutations/Spotify");
const Vehicle_1 = require("./Mutations/Vehicle");
const Brand_1 = require("./Queries/Brand");
const Vehicle_2 = require("./Queries/Vehicle");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllVehicles: Vehicle_2.GET_ALL_VEHICLES,
        getAllBrands: Brand_1.GET_ALL_BRANDS
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addVehicle: Vehicle_1.ADD_VEHICLE,
        spotifyLogin: Spotify_1.SPOTIFY_LOGIN,
        spotigyLoginRefresh: Spotify_1.SPOTIFY_LOGIN_REFRESH
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
