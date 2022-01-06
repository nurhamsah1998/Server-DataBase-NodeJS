const dbConfig = require('../../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dataBase = {};
dataBase.Url = dbConfig.url;
dataBase.mongoose = mongoose;

module.exports = dataBase;
