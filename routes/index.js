const api = require('./api');
const home = require('./api');

const routes = require('express').Router();

routes.use('/', home);

routes.use('/api', api);

routes.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

module.exports = routes;