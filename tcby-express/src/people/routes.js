const express = require("express");
const router = express.Router();
const {
  getPeople,
  getSmartphoneByID,
  deleteSmartphoneByID,
  createPerson,
} = require("./controller");

// Get API
router.get("/", getPeople);

// // Get single Smartphone
// // If no Device exists, display Error message
// router.get("/:id", getSmartphoneByID);

// // Create smartphone
router.post("/", createPerson);

// // Delete Smartphone
// // If no Device exists, display Error message
// router.delete("/:id", deleteSmartphoneByID);

module.exports = router;
