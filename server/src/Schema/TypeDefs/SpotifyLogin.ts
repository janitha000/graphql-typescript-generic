import { GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const SpotifyLogin = new GraphQLObjectType({
    name: "SpotifyLogin",
    fields: () => ({
        access_token: { type: GraphQLString },
        refresh_token: { type: GraphQLString },
        expires_in: { type: GraphQLInt }
    })
})

export const SpotifyLoginInput = new GraphQLInputObjectType({
    name: "SpotifyLoginInput",
    fields: () => ({
        code: { type: GraphQLString }
    })
})

export const SpotifyLoginRefreshInput = new GraphQLInputObjectType({
    name: "SpotifyLoginRefreshInput",
    fields: () => ({
        refresh_token: { type: GraphQLString }
    })
})

export interface ISpotifyLogin {
    access_token: string,
    refresh_token: string,
    expires_in: number
}