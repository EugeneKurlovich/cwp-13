var bodyParser = require('body-parser');

function validateDelete(body) {
    if (body !== undefined) 
    {
        return true;
    }

        return false;        
}



module.exports = {
validateDelete
};