"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const Schema_1 = require("./Schema");
const LoggingMiddleware_1 = __importDefault(require("./MIddleware/LoggingMiddleware"));
const Brand_1 = require("./Schema/DataLoaders/Brand");
const loaders = {
    BrandLoader: Brand_1.BrandLoader
};
const graphQL = express_graphql_1.graphqlHTTP({
    schema: Schema_1.schema,
    graphiql: true,
    context: { loaders },
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use(LoggingMiddleware_1.default);
    app.use('/graphql', graphQL);
    app.listen(5000, () => {
        console.log('server is running on port 5000 with love');
    });
});
main().catch((err) => {
    console.log(err);
});
