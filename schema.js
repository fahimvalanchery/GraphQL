const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');

/**
 * Data
 */

let CustomersArray = [
  { id: '1', name: 'test 1' },
  { id: '2', name: 'test 2' },
  { id: '3', name: 'test 3' },
  { id: '4', name: 'test 4' }
];

/**
 * Types
 */
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  }
});

/**
 * Root Query
 *
 */
const QueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (parentVal, args) => {
        for (let i = 0; i < CustomersArray.length; i++) {
          if (CustomersArray[i].id === args.id) {
            return CustomersArray[i];
          }
        }
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve: () => {
        return CustomersArray;
      }
    }
  }
});

/**
 * Schme
 */

module.exports = new GraphQLSchema({
  query: QueryType
});
