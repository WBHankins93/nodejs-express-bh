const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Pak!!!!!!!!!!!!!!!!!!!!!!");
});
 
module.exports.app = app;
