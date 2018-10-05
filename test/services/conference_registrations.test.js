const assert = require('assert');
const app = require('../../src/app');

describe('\'conference_registrations\' service', () => {
  it('registered the service', () => {
    const service = app.service('conference-registrations');

    assert.ok(service, 'Registered the service');
  });
});
