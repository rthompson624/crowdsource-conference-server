// Initializes the `conferences` service on path `/conferences`
const createService = require('feathers-sequelize');
const createModel = require('../../models/conferences.model');
const hooks = require('./conferences.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/conferences', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('conferences');

  service.hooks(hooks);
};
