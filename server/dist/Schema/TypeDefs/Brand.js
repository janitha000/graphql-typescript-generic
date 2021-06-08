"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRANDS = exports.BrandType = void 0;
const graphql_1 = require("graphql");
const Vehicle_1 = require("./Vehicle");
exports.BrandType = new graphql_1.GraphQLObjectType({
    name: "Brand",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        founded: { type: graphql_1.GraphQLInt },
        vehicles: {
            type: graphql_1.GraphQLList(Vehicle_1.VehicleType),
            resolve: (parent, args, { loaders }) => loaders.BrandLoader.load(parent.name)
        }
    })
});
exports.BRANDS = [
    {
        name: "BMW",
        founded: 1990,
    },
    {
        name: "AUDI",
        founded: 1982,
    },
    {
        name: "BENZ",
        founded: 1800,
    }
];
const getVehicleForBrand = (name) => {
    console.log('called with name ' + name);
    return Vehicle_1.VEHICLES.filter(x => x.type === name);
};
