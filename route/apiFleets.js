const express = require('express');
var bodyParser = require('body-parser');
const config = require('../config.json');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models')(Sequelize, config);
let validatorController =  require('./validator');
const app = express();
app.use(bodyParser.json()); 


router.get('/readAll',async function(req,res,next){

let result = await db.fleets.findAll();
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
    console.log(req.body.id);
let result = await db.fleets.findById(req.body.id);

  if (result !== undefined)
    {
        res.send(JSON.stringify(result));
    }
    else
    {
        res.end('ERROR 404');
    }
});

router.post('/create',async function(req,res,next){
let result = await db.fleets.create(req.body);

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
    let result = await db.fleets.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        });
    
      if (result !== undefined)
        {
            res.send(JSON.stringify(req.body));
        }
        else
        {
            res.end('ERROR 400');
        }  
    });

    router.post('/delete',async function(req,res,next){

        if (req.body.id !== undefined)
            {
      let result = await db.fleets.destroy({
                where: {
                    id: req.body.id
                }
            });
        
          if (result !== undefined)
            {
                res.send(JSON.stringify(req.body.id));
            }
            else
            {
                res.end('ERROR 400');
            } 
        }
        else
        {
            res.end("VALIDATION ERROR");
        } 
        });

module.exports = router;


