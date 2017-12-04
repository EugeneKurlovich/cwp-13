const express = require('express');
var bodyParser = require('body-parser');
const config = require('../config.json');
const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models')(Sequelize, config);

const app = express();
app.use(bodyParser.json()); 
module.exports = router;

router.post('/create',async function(req,res,next){
    let result = await db.motions.create(req.body);
    
        if (result !== undefined)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.end('ERROR CREATE');
        }
});