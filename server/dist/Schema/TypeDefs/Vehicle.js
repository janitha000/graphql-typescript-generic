"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VEHICLES = exports.VehicleInputType = exports.VehicleType = void 0;
const graphql_1 = require("graphql");
const Brand_1 = require("./Brand");
exports.VehicleType = new graphql_1.GraphQLObjectType({
    name: "Vehicle",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        year: { type: graphql_1.GraphQLInt },
        type: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLInt },
        brandFounded: {
            type: graphql_1.GraphQLInt,
            resolve: (parent) => getBrandFound(parent.type)
        }
    })
});
exports.VehicleInputType = new graphql_1.GraphQLInputObjectType({
    name: "VehileInput",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        year: { type: graphql_1.GraphQLInt },
        type: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLInt }
    })
});
exports.VEHICLES = [
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
];
const getBrandFound = (type) => {
    console.log("taking founded for " + type);
    return Brand_1.BRANDS.filter(x => x.name === type)[0].founded;
};
