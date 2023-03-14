const express = require("express");
const router = express.Router();
const {
  getCities,
  getCityByID,
  deleteSmartphoneByID,
  createSmartphone,
} = require("./controller");

// Get API
router.get("/", getCities);

// Get City
router.get("/:id", getCityByID);

// // Create smartphone
// router.post("/", createSmartphone);

// // Delete Smartphone
// // If no Device exists, display Error message
// router.delete("/:id", deleteSmartphoneByID);

module.exports = router;
