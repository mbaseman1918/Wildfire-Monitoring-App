const pool = require('../../database/postgresql.js');

pool.connect();

module.exports = {
  addUser: (params) => {
    return pool.query(
      `INSERT INTO users (
        firstname, lastname, email, passwrd, addressline1, addressline2, city, state, zipcode, lat, lng
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
      )`,
      [
        params.firstName,
        params.lastName,
        params.email,
        params.passwrd,
        params.addressLine1,
        params.addressLine2,
        params.city,
        params.state,
        params.zipcode,
        params.lat.toString(),
        params.lng.toString()
      ]
    )
  },

  getUser: (params) => {
    return pool.query(
      `SELECT lat, lng FROM users WHERE email = $1 AND passwrd = $2`,
      [params.email, params.passwrd]
    )
  }
}