var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://cato:monzter1@ds035260.mongolab.com:35260/multivision_cato',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};