const express = require ('express');
const path = require ('path');
const app = express ();
const PORT = 3000;

app.use (express.static (path.join(__dirname, 'public')));
app.get ('/', (req, res) => { return res.sendFile (path.join(__dirname, 'views', 'home.html'))});
app.get ('/register', (req, res) => res.sendFile (path.join(__dirname, 'views', 'register.html')));


app.listen(PORT, () => (console.log("corriendo en http://localhost:" + PORT)));