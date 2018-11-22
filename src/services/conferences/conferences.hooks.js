const { authenticate } = require('@feathersjs/authentication').hooks;

const recordAccounting = require('../../hooks/record-accounting');
const processConference = require('../../hooks/process-conference');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [recordAccounting(), processConference()],
    update: [recordAccounting(), processConference()],
    patch: [recordAccounting(), processConference()],
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
