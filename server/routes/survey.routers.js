const express = require('express')
const pool = require('../modules/pool')
const router = express.Router();

//Post Survey 
router.post('/', (req,res) => {

    const newSurvey = req.body
    //Here is where the sql input are sent to the database
    const sqlQuery = `INSERT INTO "feedback"
                        ("feeling", "understanding", "support", "comments")
                      VALUES
                         ($1, $2, $3, $4)`;

    params = [

        newSurvey.feeling,
        newSurvey.understanding,
        newSurvey.support,
        newSurvey.comments
    ]
    pool.query(sqlQuery, params)
        .then((result) => {
            res.sendStatus(201);
            console.log('POST /api/survey', result);

        })
        .catch((error) => {
            console.log('POST /api/survey Error:', error);
            res.sendStatus(500);
        });
});


// //Get for initating DB
// router.get('/', (req, res) => {
//     const sqlQuery = `SELECT 
//                             id, 
//                             feeling, 
//                             understanding, 
//                             support, 
//                             comments, 
//                             flagged, 
//                             date 
//                         FROM feedback 
//                         ORDER BY id ASC`;

//     db.query(sqlQuery)
//         .then((result) => {
//             res.send(result.rows);
//             console.log('GET /api/survey Records:', result.rows.length);
//         })
//         .catch((error) => {
//             console.log('GET /api/survey Error:', error);
//             res.sendStatus(500);
//         });
// });




module.exports = router;