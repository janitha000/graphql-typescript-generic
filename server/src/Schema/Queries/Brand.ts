import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Brand, BRANDS, BrandType } from "../TypeDefs/Brand";

export const GET_ALL_BRANDS = {
    type: new GraphQLList(BrandType),
    resolve(): Brand[] {
        return BRANDS
    }
}

export const GET_BRAND_BY_NAME = {
    type: BrandType,
    args: {
        name: { type: GraphQLString }
    },
    resolve: (_: any, args: any): Brand | null => {
        let filteredBrand = BRANDS.filter(x => x.name === args.name)
        if (filteredBrand.length > 0)
            return filteredBrand[0]

        return null
    }
}