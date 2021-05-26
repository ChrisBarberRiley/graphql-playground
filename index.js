import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers.js';
import schema from './schema.js';

const app = express();

const root = resolvers;
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
