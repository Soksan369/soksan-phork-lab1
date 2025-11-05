import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import { MESSAGES } from '../constants.js';

describe('GET /', () => {
  it('should return the correct greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal(MESSAGES.GREETING);
  });
});