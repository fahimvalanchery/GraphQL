const { GraphQLString } = require('graphql');
const CustomerType = require('../types/Customer');
/**
 * Data
 */
const CustomersArray = require('../data');

const CustomerQuery = {
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
};

module.exports = CustomerQuery;
