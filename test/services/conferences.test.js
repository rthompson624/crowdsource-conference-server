const assert = require('assert');
const app = require('../../src/app');

describe('\'conferences\' service', () => {
  it('registered the service', () => {
    const service = app.service('conferences');

    assert.ok(service, 'Registered the service');
  });
});
