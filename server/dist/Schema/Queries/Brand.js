"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_BRANDS = void 0;
const graphql_1 = require("graphql");
const Brand_1 = require("../TypeDefs/Brand");
exports.GET_ALL_BRANDS = {
    type: new graphql_1.GraphQLList(Brand_1.BrandType),
    resolve() {
        return Brand_1.BRANDS;
    }
};
