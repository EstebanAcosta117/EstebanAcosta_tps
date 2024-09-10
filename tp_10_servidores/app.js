const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'index.html')));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'index.html')));
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'babbage.html')));
app.get('/berners-lee', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'berners-lee.html')));
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'clarke.html')));
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'hamilton.html')));
app.get('/hopper', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'hopper.html')));
app.get('/lovelace', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'lovelace.html' )));
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, 'public', 'views', 'turing.html')));


app.listen(PORT, () => console.log('servidor corriendo en: http://localhost:' + PORT));