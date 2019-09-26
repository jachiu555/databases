var db = require('../db');

// db.con((result)=>{console.log(result[0].id)});
var result;
      db.con((res) => {
        result = res;
      console.log(result);
      });

module.exports = {
  messages: {
    get: function () {
      var result;
      db.con((res) => {
        result = res;
      });
      console.log(result);
      return result;
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

