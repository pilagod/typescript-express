import express from 'express';
import health from '@health/api';

const app = express();

app.use(health());

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
