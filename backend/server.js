require('dotenv').config();
const express = require('express');
const {Pool} = require('pg');

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

app.get('/api/users', async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
});

app.listen(port, () => {
    console.log(`Server listening at http:localhost:${port}`);
});