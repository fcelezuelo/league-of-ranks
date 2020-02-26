const express = require('express');
const app = express();

app.use('/', require('./routes'));

app.listen(8080, () => {
  console.log('listening at 8080');
});

module.exports = app;