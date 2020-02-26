const express = require('express');
const app = express();

app.use('/', require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(`listening at ${process.env.PORT}`);
});

module.exports = app;