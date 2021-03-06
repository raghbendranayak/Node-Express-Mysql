var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /account/login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/account/login')
      .expect(200, done);
  });
});

describe('GET /account/register', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/account/register')
      .expect(200, done);
  });
});

describe('GET /api', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});


describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/resetasdaljdkajsd')
      .expect(404, done);
  });
});