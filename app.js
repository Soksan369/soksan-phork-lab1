import express from 'express';
import { MESSAGES } from './constants.js';

const app = express();

app.get('/', (req, res) => {
  res.send(MESSAGES.GREETING);
});

export default app;