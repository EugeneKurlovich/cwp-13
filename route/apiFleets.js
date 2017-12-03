const express = require('express');

const config = require('../config.json');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models')(Sequelize, config);

router.get('/readAll',async function(req,res,next){

let ress = await db.fleets.findAll();
    if (ress.length !== 0)
    {
        res.send(JSON.stringify(ress));
    }
    else
    {
        res.end('ERROR');
    }
});




module.exports = router;


