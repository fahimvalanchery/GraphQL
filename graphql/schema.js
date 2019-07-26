const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const CustomerQuery = require('../graphql/queries/customer.query');
const { CustomersQuery } = require('../graphql/queries/customers.query');

/**
 * Root Query
 */
const QueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    customer: CustomerQuery,
    customers: CustomersQuery
  }
});

/**
 * Schema
 */
module.exports = new GraphQLSchema({
  query: QueryType
});
