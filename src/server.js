import Hapi from '@hapi/hapi';

import routes from './routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

init();
