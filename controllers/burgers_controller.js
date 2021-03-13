const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  let devoured = 0;
  if (req.body.devoured === "true") {
    devoured = 1;
  }
  burger.insert(
    ["burger_name", "devoured"],
    [req.body.burger_name, devoured],
    (result) => {
      console.log(result);
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
