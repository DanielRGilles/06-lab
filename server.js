require('dotenv').config();

const express = require('express');
const { data } = require('./data.js');

const app = express();
const cors = require('cors');


app.use(cors());

app.get('/data', (req, res) => {
   
    res.json(beanieBabies);
});


app.get('/data/:id', (req, res) => {
    const matchingBeanieBaby = beanieBabies.find(baby => baby.id === Number(req.params.id));

    res.json(matchingBeanieBaby);
});

module.exports = { app };