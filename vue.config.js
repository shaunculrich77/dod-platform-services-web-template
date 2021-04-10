const fs = require('fs');

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('./certs/local.dod.la-key.pem'),
            cert: fs.readFileSync('./certs/local.dod.la.pem'),
        },
        host: 'local.dod.la',
        port: 8085,
    },
};
