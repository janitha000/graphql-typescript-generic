/* eslint-disable indent */
/* eslint-disable linebreak-style */
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import { schema } from './Schema'
import LoggingMiddleware from './MIddleware/LoggingMiddleware'

const graphQL = graphqlHTTP({
    schema,
    graphiql: true,
});

const main = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(LoggingMiddleware)

    app.use('/graphql', graphQL);

    app.listen(5000, () => {
        console.log('server is running on port 5000');
    });

};

main().catch((err) => {
    console.log(err);
});
