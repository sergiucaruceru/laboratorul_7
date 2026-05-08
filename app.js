const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rootpassword',
    database: 'myapp_base'
});

db.connect((err) => {
    if (err) {
        console.error('Eroare MySQL:', err);
        return;
    }
    console.log('Conectat la MySQL!');
});

app.get('/', (req, res) => {
    db.query('SELECT NOW() AS time', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.send(`
            <h1>Laborator 7 - Docker și GitHub Actions</h1>
            <p>Aplicația funcționează corect!</p>
            <p>Timp MySQL: ${results[0].time}</p>
        `);
    });
});

app.listen(3000, () => {
    console.log('Server pornit pe portul 3000');
});