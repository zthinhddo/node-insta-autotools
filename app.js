const express = require('express');
const app = express();
const port = 3000;

// Custom imports
const instaApi = require('./src/apis/insta-api');
const startBot = require('./src/utils/insta-funcs');

// Import other api routes
app.use('/insta-api', instaApi);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  await startBot();
  console.log(`App listening at http://localhost:${port}`);
});