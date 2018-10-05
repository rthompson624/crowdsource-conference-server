const users = require('./users/users.service.js');
const conferences = require('./conferences/conferences.service.js');
const conferenceRegistrations = require('./conference_registrations/conference_registrations.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(conferences);
  app.configure(conferenceRegistrations);
};
