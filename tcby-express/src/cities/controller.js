const pool = require("../../db");
const queries = require("./queries");
const lo = require("lodash");

const getCities = (req, res) => {
  pool.query(queries.getCities, (error, results) => {
    if (error) {
      res.status(400).send("Error getting Data");
    } else {
      res.json(results.rows);
    }
  });
};

const getCityByID = (req, res) => {
  let id = parseInt(req.params.id);
  pool.query(queries.getCityByID, [id], (error, results) => {
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

const createSmartphone = (req, res) => {
  const { name, price, release_date } = req.body;
  pool.query(
    queries.createSmartphone,
    [name, price, release_date],
    (error, results) => {
      if (error) {
        res.status(400).send("error, format incorrect");
      } else {
        res.status(201).send("Smartphone added");
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
  getCities,
  getCityByID,
  deleteSmartphoneByID,
  createSmartphone,
};
