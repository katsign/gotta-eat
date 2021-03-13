const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burgers', (req, res) => {
    let devoured = 0;
    if (req.body.devoured === 'true') {
      devoured = 1;
    }
    burger.insert(
      ['burger_name', 'devoured'],
      [req.body.burger_name, devoured],
      (result) => {
        console.log(result);
        res.json({ id: result.insertId });
      }
    );
  });
  

module.exports = router;