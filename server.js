const app = require('express')();
const dbClient = require('./utils/db');
const router = require('./index');
app.use('/', router);
app.listen(5000);
