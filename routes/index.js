var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=e5ccd97e4758610cc274a9961e8dece6')
      .then(response => response.json())
      .then(data => {
        res.json({ movies : data.results });
      });
   });
   