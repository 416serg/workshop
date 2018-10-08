// Libraries
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

// Server and Configuration
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8000;

// Setup static files
app.use(express.static(path.join(__dirname, '../static')));

// Setup Express to use hulk-hogan (Hogan.js) as a template engine
app.set('views', path.join(__dirname, '/templates'));
app.set('view options', { layout: false });

app.engine('.html', handlebars({ extname: 'html' }));
app.set('view engine', '.html');

// Routes
app.get('/', function DefaultRoute (req, res) {
  res.render('index', { name: 'Awesome App' });
});

app.post('/api/endpoint1', function APIEndpoint01 (req, res) {
  res.status(501).send('Not Implemented');
});

// Start the Server
console.log('INFO', `Listening on ${host}:${port}`);
app.listen(port);
