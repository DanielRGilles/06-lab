require('dotenv').config();

const express = require('express');
const { ediblePlants } = require('./data.js');

const app = express();
const cors = require('cors');


app.use(cors());

app.get('/edible-plants', (req, res) => {
   
    res.json(ediblePlants);
});


app.get('/edible-plants/:id', (req, res) => {
    const matchingPlant = ediblePlants.find(plant => plant.id === Number(req.params.id));

    res.json(matchingPlant);
});

module.exports = { app };