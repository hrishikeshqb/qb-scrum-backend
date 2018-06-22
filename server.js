require('./database')
const express = require('express')
const router  = require('./src/routes');
const app = express()

app.use('/', router);

app.listen(3000, () => console.log('qb-scrum-backend is listening on port 3000!'))
