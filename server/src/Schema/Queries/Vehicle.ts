import { GraphQLList } from "graphql";
import { VehicleType, Vehicle, VEHICLES } from "../TypeDefs/Vehicle";


export const GET_ALL_VEHICLES = {
    type: new GraphQLList(VehicleType),
    resolve(): Vehicle[] {
        return VEHICLES;
    }
}