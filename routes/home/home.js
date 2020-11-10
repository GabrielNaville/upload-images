const routes = require('express').Router({mergeParams: true});
const homePage = require('../../../controllers/image/record');

routes.use('/', homePage);

module.exports = routes;