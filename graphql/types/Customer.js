const { GraphQLObjectType, GraphQLString } = require('graphql');

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
module.exports = CustomerType;
