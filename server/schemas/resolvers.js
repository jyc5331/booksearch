const {
  getSingleUser,
  createUser,
  login,
  saveBook,
  deleteBook,
} = require("../controllers/user-controller");

const resolvers = {
  //parent doesn't need to be called, it is used only so we can pass username as the second argument
  //the ternary operator checks to see if a username exists and either runs the query with the supplied username or returns an empty object

  Query: {
    me: getSingleUser,
  },

  Mutation: {
    addUser: createUser,

    login: login,

    saveBook: saveBook,

    removeBook: deleteBook,
  },
};

module.exports = resolvers;
