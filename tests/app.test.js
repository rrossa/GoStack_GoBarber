const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('GET / responds with Hello world', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello world' });
  });
});
