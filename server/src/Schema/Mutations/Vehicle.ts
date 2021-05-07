import { GraphQLString, GraphQLInt } from "graphql";
import { VehicleType, VehicleInput, VEHICLES, Vehicle, VehicleInputType } from "../TypeDefs/Vehicle";

export const ADD_VEHICLE = {
    type: VehicleType,
    args: {
        // name: { type: GraphQLString },
        // year: { type: GraphQLInt },
        // type: { type: GraphQLString },
        // price: { type: GraphQLInt }
        input: { type: VehicleInputType }
    },
    resolve: (_: any, args: any) => {
        const { name, year, type, price } = args.input;
        VEHICLES.push({ name, year, type, price });
        return args
    }

}