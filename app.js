const express = require('express');
const routes = require('./routes');

const app = express();

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use('/', routes);

app.use(express.static('public'));

const startServer = (port = 1337) => {
    const server = app.listen( port, () => {
        console.log(`Server running on port ${port}`);
    });
};

module.exports = startServer;