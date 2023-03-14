const getCities = "Select * from cities";
const getCityByID = "Select * from cities where id = $1";
const createSmartphone =
  "INSERT INTO smartphones (name, price, release_date) VALUES ($1, $2, $3)";
const deleteSmartphoneByID = `DELETE FROM smartphones where id = $1`;

module.exports = {
  getCities,
  getCityByID,
  createSmartphone,
  deleteSmartphoneByID,
};
