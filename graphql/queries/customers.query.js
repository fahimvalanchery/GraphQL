const { GraphQLList } = require('graphql');
const CustomerType = require('../types/Customer');

/**
 * Data
 */
const CustomersArray = require('../data');

const CustomersQuery = {
  type: new GraphQLList(CustomerType),
  resolve: () => {
    return CustomersArray;
  }
};

module.exports = CustomersQuery;
