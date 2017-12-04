const express = require('express');
var bodyParser = require('body-parser');
const config = require('../config.json');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models')(Sequelize, config);

const app = express();
app.use(bodyParser.json()); 
module.exports = router;

router.get('/milage', async function (req, res, next) {
    let vehicle = await req.dbWorker.findById(req.query.vehicleId);

    if (vehicle) {
        let coords = await req.dbWorker.getCoords(req.query.vehicleId);

        if (coords.length < 2)
            res.end(JSON.stringify(0));
        else {
            let distance = geolib.getPathLength(coords);
            res.end(JSON.stringify(distance));
        }
    }
    else
        forwardError(next, 404);
});

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

    if (result !== undefined)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR CREATE');
    }
});

router.post('/update',async function(req,res,next){
    let result = await db.vehicles.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        });

    if (result !== undefined)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR 404');
    }
});

router.post('/delete',async function(req,res,next){
    let result = await db.vehicles.destroy({
            where: {
                id: req.body.id
            }
    });

    if (result !== undefined)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR 404');
    }
});