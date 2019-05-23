const request = require('supertest');
const app = require('../app.js');

describe('GET /api/compaigns', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/api/compaigns')
      .expect(200, done);
  });
});

describe('GET /api/compaigns/n1', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/api/compaigns/n1')
      .expect(200, done);
  });
});

describe('GET /api/compaigns/n6', () => {
  it('should return 404 Not Found', (done) => {
    request(app)
      .get('/api/compaigns/n6')
      .expect(404, done);
  });
});
