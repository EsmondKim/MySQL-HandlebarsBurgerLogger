let express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(["name"], [req.body.name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("Following the PUT through to controller.");
  console.log("condition", condition);

  burger.updateOne(
    {
      eaten: req.body.eaten,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  console.log("You hit the express router!");
  let condition = `id = ${req.params.id}`;
  burger.deleteOne(condition, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});

module.exports = router;
