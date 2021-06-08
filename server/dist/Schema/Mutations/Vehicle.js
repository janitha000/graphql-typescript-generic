"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_VEHICLE = void 0;
const Vehicle_1 = require("../TypeDefs/Vehicle");
exports.ADD_VEHICLE = {
    type: Vehicle_1.VehicleType,
    args: {
        // name: { type: GraphQLString },
        // year: { type: GraphQLInt },
        // type: { type: GraphQLString },
        // price: { type: GraphQLInt }
        input: { type: Vehicle_1.VehicleInputType }
    },
    resolve: (_, args) => {
        const { name, year, type, price } = args.input;
        Vehicle_1.VEHICLES.push({ name, year, type, price });
        return args;
    }
};
