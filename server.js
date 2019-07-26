const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql/schema');
const app = new express();

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('server is running on port 4000');
});
