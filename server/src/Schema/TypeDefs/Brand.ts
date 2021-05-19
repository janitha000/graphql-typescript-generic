import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Vehicle, VEHICLES, VehicleType } from "./Vehicle";

export const BrandType = new GraphQLObjectType({
    name: "Brand",
    fields: () => ({
        name: { type: GraphQLString },
        founded: { type: GraphQLInt },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (parent, args, { loaders }) => loaders.BrandLoader.load(parent.name)
        }
    })
})

export interface Brand {
    name: "BMW" | "AUDI" | "BENZ",
    founded: number,
    // vehicles: Vehicle[]
}



export const BRANDS: Brand[] = [
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
]

const getVehicleForBrand = (name: string): Vehicle[] => {
    console.log('called with name ' + name)
    return VEHICLES.filter(x => x.type === name)
}