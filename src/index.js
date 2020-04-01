'use strict';
require('./services/mongo');
const Hapi = require('@hapi/hapi');
const routes = require('./routes')



const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
/*    try {
        await server.register({
            plugin: require('hapi-cors'),
            options: {
                origins: ['http://localhost:3001/api/v1/product']
            }
        });
    } catch (err) {
        console.log(err)
    }*/
    server.route(routes);

    await server.start(routes);
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();