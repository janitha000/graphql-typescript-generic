"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyLoginRefreshInput = exports.SpotifyLoginInput = exports.SpotifyLogin = void 0;
const graphql_1 = require("graphql");
exports.SpotifyLogin = new graphql_1.GraphQLObjectType({
    name: "SpotifyLogin",
    fields: () => ({
        access_token: { type: graphql_1.GraphQLString },
        refresh_token: { type: graphql_1.GraphQLString },
        expires_in: { type: graphql_1.GraphQLInt }
    })
});
exports.SpotifyLoginInput = new graphql_1.GraphQLInputObjectType({
    name: "SpotifyLoginInput",
    fields: () => ({
        code: { type: graphql_1.GraphQLString }
    })
});
exports.SpotifyLoginRefreshInput = new graphql_1.GraphQLInputObjectType({
    name: "SpotifyLoginRefreshInput",
    fields: () => ({
        refresh_token: { type: graphql_1.GraphQLString }
    })
});
