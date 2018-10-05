// Initializes the `conference_registrations` service on path `/conference-registrations`
const createService = require('feathers-sequelize');
const createModel = require('../../models/conference_registrations.model');
const hooks = require('./conference_registrations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/conference-registrations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('conference-registrations');

  service.hooks(hooks);
};
