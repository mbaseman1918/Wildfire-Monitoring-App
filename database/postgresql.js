require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'matthewbaseman',
  host: 'localhost',
  database: 'wildfiremonitor',
  password: '',
  port: 5432,
});

module.exports = pool;

// host: 'localhost',