/* eslint-disable indent */
/* eslint-disable linebreak-style */
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import { schema } from './Schema'
import LoggingMiddleware from './MIddleware/LoggingMiddleware'
import DataLoader from 'dataloader';
import { BrandLoader } from './Schema/DataLoaders/Brand';

const loaders = {
    BrandLoader
}

const graphQL = graphqlHTTP({
    schema,
    graphiql: true,
    context: { loaders },
});

const main = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(LoggingMiddleware)

    app.use('/graphql', graphQL);

    app.listen(5000, () => {
        console.log('server is running on port 5000 with love');
    });

};

main().catch((err) => {
    console.log(err);
});
