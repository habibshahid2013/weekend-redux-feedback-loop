const express = require('express')
const pool = require('../modules/pool')
const router = express.Router();





//Post Survey 


router.post('/', (req,res) => {
    sqlQuery = `INSERT INTO feedback("feeling", "understanding", "support", "comment")`

})





module.exports = router;