const { authenticate } = require('@feathersjs/authentication').hooks;

const recordAccounting = require('../../hooks/record-accounting');
const processConferenceRegistration = require('../../hooks/process-conference-registration');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [recordAccounting(), processConferenceRegistration()],
    update: [recordAccounting(), processConferenceRegistration()],
    patch: [recordAccounting(), processConferenceRegistration()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
