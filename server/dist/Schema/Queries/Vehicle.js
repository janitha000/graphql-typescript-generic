"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVehicles = exports.GET_ALL_VEHICLES = void 0;
const graphql_1 = require("graphql");
const Vehicle_1 = require("../TypeDefs/Vehicle");
exports.GET_ALL_VEHICLES = {
    type: new graphql_1.GraphQLList(Vehicle_1.VehicleType),
    resolve() {
        return exports.getAllVehicles();
    }
};
const getAllVehicles = () => {
    return Vehicle_1.VEHICLES;
};
exports.getAllVehicles = getAllVehicles;
