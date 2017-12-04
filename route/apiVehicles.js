const express = require('express');
var bodyParser = require('body-parser');
const config = require('../config.json');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models')(Sequelize, config);

const app = express();
app.use(bodyParser.json()); 
module.exports = router;

router.post('/readAll',async function(req,res,next){
    let result = await db.vehicles.findAll({
        where:
        {
            fleetId : req.body.fleetId
        }
    });

    if (result.length !== 0)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR');
    }
});

router.post('/read',async function(req,res,next){
    let result = await db.vehicles.findAll({
        where:
        {
            id : req.body.id
        }
    });

    if (result.length !== 0)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR 404');
    }
});

router.post('/create',async function(req,res,next){
    let result = await db.vehicles.create(req.body);

    if (result.length !== 0)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR 404');
    }
});