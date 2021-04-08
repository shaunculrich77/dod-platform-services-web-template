const fs = require('fs');

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('./certs/localhost-key.pem'),
            cert: fs.readFileSync('./certs/localhost.pem'),
        },
        // added to stop ERR_CONNECTION_REFUSED error. Error because cert is not issued by an acceptable CA and Chrome complains
        public: 'https://localhost:8080/',
    },
};
