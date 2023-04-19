var express = require('express');
var router = express.Router();
const MyApi = process.env.OWM_API_KEY

module.exports = router;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MyApi}`)
      .then(response => response.json())
      .then(data => {
        res.json({ movies : data.results });
      });
   });
   