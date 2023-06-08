DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  email TEXT UNIQUE,
  passwrd TEXT,
  addressLine1 TEXT,
  addressLine2 TEXT,
  city TEXT,
  state TEXT,
  zipcode INT,
  lat TEXT,
  lng TEXT
)