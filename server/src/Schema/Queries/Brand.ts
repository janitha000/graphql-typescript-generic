import { GraphQLList } from "graphql";
import { Brand, BRANDS, BrandType } from "../TypeDefs/Brand";

export const GET_ALL_BRANDS = {
    type: new GraphQLList(BrandType),
    resolve(): Brand[] {
        return BRANDS
    }
}