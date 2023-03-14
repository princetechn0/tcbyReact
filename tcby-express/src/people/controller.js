const pool = require("../../db");
const queries = require("./queries");

const getPeople = (req, res) => {
  pool.query(queries.getPeople, (error, results) => {
    if (error) {
      res.status(400).send("Error getting Data");
    } else {
      res.json(results.rows);
    }
  });
};

const getSmartphoneByID = (req, res) => {
  let id = parseInt(req.params.id);
  pool.query(queries.getSmartphoneByID, [id], (error, results) => {
    if (error) {
      res.status(400).send("Error getting Data");
    }
    if (lo.isEmpty(results.rows)) {
      res.send("error, no device");
    } else {
      res.json(results.rows);
    }
  });
};

const createPerson = (req, res) => {
  const { city, first_name, last_name, age } = req.body;
  console.log(city, first_name, last_name, age);
  pool.query(
    queries.createPerson,
    [city, first_name, last_name, age],
    (error, results) => {
      if (error) {
        res.status(400).send("error, format incorrect");
      } else {
        res.status(201).send("Person added");
      }
    }
  );
};

const deleteSmartphoneByID = (req, res) => {
  let id = parseInt(req.params.id);
  pool.query(queries.deleteSmartphoneByID, [id], (error, results) => {
    res.send("Item deleted successfully");
  });
};

module.exports = {
  getPeople,
  getSmartphoneByID,
  deleteSmartphoneByID,
  createPerson,
};
