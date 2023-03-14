const getPeople = "Select * from people";
const getSmartphoneByID = "Select * from smartphones where id = $1";
const createPerson =
  "INSERT INTO PEOPLE (city, first_name, last_name, age) VALUES ($1, $2, $3, $4)";
const deleteSmartphoneByID = `DELETE FROM smartphones where id = $1`;

module.exports = {
  getPeople,
  getSmartphoneByID,
  createPerson,
  deleteSmartphoneByID,
};
