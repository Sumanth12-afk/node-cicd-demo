import request from 'supertest';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js Microservice!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

describe('API Endpoints', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Node.js Microservice!' });
  });

  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'healthy' });
  });
});
