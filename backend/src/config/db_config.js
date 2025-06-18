const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const db_uri = process.env.DB_URI;

const connection = mongoose.connect(db_uri, {});

module.exports = connection;