const catchAsync = require('../utils/catchAsync');
const db = require('../utils/db');

exports.addEarth = catchAsync(async (req, res, next) => {
  const earthData = {
    estate_type_id: req.body.estate_type_id,
    neighborhood_id: req.body.neighborhood_id,
    property_type_id: req.body.property_type_id,
    ownership_type_id: req.body.ownership_type_id,
    direction_id: req.body.direction_id,
    area: req.body.area,
    balconies_space: req.body.balconies_space,
    number_of_estate: req.body.number_of_estate,
    price: req.body.price,
    moon_introduction: req.body.moon_introduction,
    date_signed: req.body.date_signed,
    number_of_earth: req.body.number_of_earth,
    owner_of_property_id: req.body.owner_of_property_id,
    number_of_floor: req.body.number_of_floor,
    number_of_room: req.body.number_of_room,
    number_of_bedrooms: req.body.number_of_bedrooms,
    number_of_bathrooms: req.body.number_of_bathrooms,
    number_of_ws: req.body.number_of_ws,
    city_id: req.body.city_id,
    kaza_id: req.body.kaza_id,
    district_id: req.body.district_id,
    estate_description: req.body.estate_description
  };

  console.log(earthData.estate_description);

  const clientCsData = {
    client_cs_name: req.body.client_cs_name,
    client_cs_phone: req.body.client_cs_phone
  };

  let client_cs_id = 0;

  let createClientCs = `INSERT INTO client_cs (client_cs_name, client_cs_phone)
                            VALUES ("${clientCsData.client_cs_name}",
                                     "${clientCsData.client_cs_phone}"
                            )`;

  db.query(createClientCs, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      client_cs_id = result.insertId;
      console.log(result.insertId);
      // res.send(result);

      let createEstate = `INSERT INTO estate (client_cs_id, estate_type_id, neighborhood_id, property_type_id, ownership_type_id, direction_id, area, balconies_space, number_of_estate, price, moon_introduction, date_signed, number_of_earth, owner_of_property_id, number_of_floor, number_of_room, number_of_bedrooms, number_of_bathrooms, number_of_ws, city_id, kaza_id, district_id, estate_description)
                               VALUES ( "${client_cs_id}",
                                        "${earthData.estate_type_id}",
                                        "${earthData.neighborhood_id}",
                                        "${earthData.property_type_id}",
                                        "${earthData.ownership_type_id}",
                                        "${earthData.direction_id}",
                                        "${earthData.area}",
                                        "${earthData.balconies_space}",
                                        "${earthData.number_of_estate}",
                                        "${earthData.price}",
                                        "${earthData.moon_introduction}",
                                        "${earthData.date_signed}",
                                        "${earthData.number_of_earth}",
                                        "${earthData.owner_of_property_id}",
                                        "${earthData.number_of_floor}",
                                        "${earthData.number_of_room}",
                                        "${earthData.number_of_bedrooms}",
                                        "${earthData.number_of_bathrooms}",
                                        "${earthData.number_of_ws}",
                                        "${earthData.kaza_id}",
                                        "${earthData.city_id}",
                                        "${earthData.district_id}",
                                        "${earthData.estate_description}")`;

      db.query(createEstate, (err1, result1) => {
        if (err1) console.log(err1);
        res.status(200).json(result1);
      });
    }
  });
});

// GET ALL CITIES
exports.getAllCity = catchAsync(async (req, res, next) => {
  const find = `SELECT city.id, city.city_name
                FROM city`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
});

exports.getAllCountry = catchAsync(async (req, res, next) => {
  const find = `SELECT C.id, C.country_name
                FROM country as C`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
});

exports.getAllDirections = catchAsync(async (req, res, next) => {
  const find = `SELECT C.id, C.direction_name
                FROM direction as C`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
});

exports.getAllEstateTypes = catchAsync(async (req, res, next) => {
  const find = `SELECT E.id, E.estate_type_name
                FROM estate_type as E`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
});

exports.getAllPropertyType = catchAsync(async (req, res, next) => {
  const find = `SELECT P.id, P.property_type_name
                FROM property_type as P`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(result);
  });
});
