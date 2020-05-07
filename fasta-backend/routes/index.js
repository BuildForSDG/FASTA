const homeRouter = require('./home');
const usersRouter = require('./users');

module.exports = (app) => {
  app.use('/api/v1', homeRouter);
  app.use('/api/v1/users', usersRouter);
};
