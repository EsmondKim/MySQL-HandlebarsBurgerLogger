let orm = require("../config/orm.js");

//Also inside `burger.js`, create the code that will call the
//ORM functions using burger specific input for the ORM.

let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteOne(condition, cb) {
    orm.deleteOne("burgers", condition, (res) => cb(res));
  },
};

module.exports = burger;
