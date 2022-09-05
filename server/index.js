const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log('the server is live an running on port', port);
});