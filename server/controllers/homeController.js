const catchAsync = require('../utils/catchAsync');
const db = require('../utils/db');

exports.getAllCountry = catchAsync(async (req, res, next) => {
  const find = `SELECT * FROM country`;

  console.log(find);
  db.query(find, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

exports.getAllCity = catchAsync(async (req, res, next) => {
  const find = `SELECT city.id, city.city_name, country.country_name
                FROM city INNER JOIN country
                ON city.country_id=country.id`;

  console.log(find);
  db.query(find, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
